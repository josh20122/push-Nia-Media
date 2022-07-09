<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Image;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;
use Intervention\Image\Facades\Image as FacadesImage;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');
        $users = User::query()
            ->when($search, function ($query, $search) {
                $query->where('title', 'LIKE', "%{$search}%");
            })
            ->withCount(['blogs', 'publishedBlogs'])
            ->paginate();

        if ($request->wantsJson()) {
            return $users;
        }
        return Inertia::render('Admin/AllUsers', [
            'users' => $users,
            'filter' => $search,
        ]);
    }

    public function edit($id)
    {
        $authenticatedUser = Auth::user();
        if ($authenticatedUser->id == $id) {
            abort(401);
        }

        if (Auth::user()->id === $id) {
            abort(401);
        }
        $user = User::find($id);
        return Inertia::render('Admin/EditUser', [
            'user' => $user,
            'imagePath' => $user->image->path
        ]);
    }

    public function updateProfile(Request $request, $id)
    {
        $authenticatedUser = Auth::user();
        if ($authenticatedUser->id == $id) {
            abort(401);
        }
        $user = User::find($id);
        $image = $request->file('image');

        if ($image && $image->getSize() === false) {
            return back()->withErrors(['image' => 'The image size must be less than 2048Kb']);
        }

        $request->validate([
            'image' => 'nullable|image|mimes:png,jpg,jpeg,gif|max:2048',
            'email' => 'required|email|max:50',
            'name' => 'required|string',
            'role' => 'required',
            'old_password' => 'nullable|current_password|required_with:password',
            'password' => 'confirmed',
        ]);

        User::query()
            ->where('id', $user->id)
            ->update([
                'email' => $request->email,
                'name' => $request->name,
                'role' => $request->role,
            ]);

        if ($request->password) {
            User::query()
                ->where('id', $user->id)
                ->update([
                    'password' => $request->password,
                ]);
        }

        if ($image) {
            $initialAvatarPath =  Image::where('imageable_type', 'App\Models\User')
                ->where('imageable_id', $user->id)
                ->first()
                ->path;
            $hasDefaultImage = Image::where('imageable_type', 'App\Models\User')
                ->where('imageable_id', $user->id)
                ->where('path', 'like', '/images/avatar/default-avatar.jpg')
                ->count();
            $imagename = time() . '-' . $image->getClientOriginalName();
            Image::where('imageable_type', 'App\Models\User')
                ->where('imageable_id', $user->id)
                ->update([
                    'path' => "/images/{$imagename}",
                ]);

            FacadesImage::make($image)->fit(180, 180)->encode('webp', 25)->save(public_path("images/{$imagename}"));

            if ($hasDefaultImage < 1) {
                if (File::exists(public_path($initialAvatarPath))) {
                    File::delete(public_path($initialAvatarPath));
                }
            }
        }
        return back();
    }
}

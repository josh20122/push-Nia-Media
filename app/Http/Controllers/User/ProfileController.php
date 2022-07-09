<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Image;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Facade;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Intervention\Image\Facades\Image as FacadesImage;


class ProfileController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        if ($user->role === 'ADMIN') {
            return Inertia::render('Admin/AdminProfile', [
                'user' => $user,
                'imagePath' => $user->image->path,
            ]);
        } else {
            return Inertia::render('User/UserProfile', [
                'user' => $user,
                'imagePath' => $user->image->path,
            ]);
        }
    }

    public function updateMyprofile(Request $request)
    {
        $user = Auth::user();
        $image = $request->file('image');

        if ($image && $image->getSize() === false) {
            return back()->withErrors(['image' => 'The image size must be less than 2048Kb']);
        }

        $request->validate([
            'image' => 'nullable|image|mimes:png,jpg,jpeg,gif|max:2048',
            'email' => 'required|email|max:50',
            'name' => 'required|string',
            'old_password' => 'nullable|required_with:password',
            'password' => 'confirmed|required_with:old_password',

        ]);

        if ($request->input('password')) {
            if (!Hash::check($request->old_password, $user->getAuthPassword())) {
                return back()->withErrors(['old_password' => 'The old password does not match']);
            }
            $chane = User::whereId($user->id)
                ->update([
                    'password' => Hash::make($request->password),
                ]);
        }

        User::query()
            ->where('id', $user->id)
            ->update([
                'email' => $request->email,
                'name' => $request->name,
            ]);

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

<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Jobs\BlogCacheJob;
use App\Models\Blog;
use App\Models\Image as ModelsImage;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = $request->input('search');
        $user = Auth::user();
        $blogs = Blog::query()
            ->when($search, function ($query, $search) {
                $query->where('title', 'LIKE', "%{$search}%");
            })
            ->orderBy('created_at', 'desc')
            ->paginate()
            ->withQueryString();


        if ($request->wantsJson()) {
            return $blogs;
        }
        return Inertia::render('User/MyBlogs', [
            'blogs' => $blogs,
            'filter' => $search,
        ]);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $tags = Tag::get();

        return Inertia::render('User/CreateBlog', [
            'tags' => $tags,
        ]);
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        $image = $request->file('image');
        if ($image && $image->getSize() === false) {
            return back()->withErrors(['image', 'Image size must be less than 2048Kb']);
        }
        $request->validate([
            'image' => 'required|image|max:2040',
            'content' => 'required|string',
            'title' => 'required|string|unique:blogs,title',
            'tags' => 'required|max:6',
            'status' => 'required|boolean',
        ]);

        $blog = User::find($user->id)->blogs()->create([
            'content' => $request->content,
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'published' => $request->status,
        ]);

        foreach ($request->tags as $tag) {
            $blog->tags()->attach($tag);
        }

        $imageName = $user->id . "{$blog->title}-image-" . time() . '.webp';
        $thumbnailName = $user->id . "{$blog->title}-thumbnail-" . time() . '.webp';

        Image::make($image)->fit(1000, 300)->encode('webp', 25)->save(public_path("/images/{$imageName}"));
        Image::make($image)->fit(500, 300)->encode('webp', 25)->save(public_path("/images/{$thumbnailName}"));

        $blogModel = Blog::find($blog->id);
        $blogModel->image()->create([
            'path' => "/images/{$imageName}",
        ]);
        $blogModel->image()->create([
            'path' => "/images/{$thumbnailName}",
        ]);

        BlogCacheJob::dispatch();

        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = Auth::user();
        $blog = Blog::find($id);
        if ($user->role !== 'ADMIN' && $user->id !== $blog->user_id) {
            abort(401);
        }
        $blog = Blog::query()->find($id);

        return Inertia::render('User/EditBlog', [
            'blog' => $blog,
            'imagePath'=>$blog->image->path,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = Auth::user();
        $blog = Blog::find($id);
        $image = $request->file('image');
        if ($user->role !== 'ADMIN' && $user->id !== $blog->user_id) {
            abort(401);
        }
        if ($image && $image->getSize() === false) {
            return back()->withErrors(['image', 'Image size must be less than 2048Kb']);
        }
        $request->validate([
            'image' => 'nullable|image|max:2040',
            'content' => 'required|string',
            'title' => 'required|string',
            'status' => 'required|boolean',
        ]);

       Blog::where('id', $id)->update([
            'content' => $request->content,
            'title' => $request->title,
            'published' => $request->status,
            'slug' => Str::slug($request->title),
        ]);

        if ($image) {
            $initialImage=$blog->image->path;
            $initialThumbnail=$blog->thumbnail->path;
            if(File::exists(public_path($initialImage))){
                File::delete(public_path($initialImage));
            }
            if(File::exists(public_path($initialThumbnail))){
                File::delete(public_path($initialThumbnail));
            }
            $imageName = $user->id . '-' . 'Image' . time() . '.webp';
            $thumbnailName = $user->id . '-' . 'Thumbnail' . time() . '.webp';
            $imageIds = ModelsImage::where('imageable_id', $id)
                ->where('imageable_type', 'App\Models\Blog')
                ->oldest()
                ->get()->pluck('id');
            Image::make($image)->fit(1000, 300)->encode('webp', 25)->save(public_path("/images/{$imageName}"));
            Image::make($image)->fit(500, 300)->encode('webp', 25)->save(public_path("/images/{$thumbnailName}"));
            ModelsImage::whereId($imageIds[0])
                ->update([
                    'path' => "/images/{$imageName}"
                ]);
            ModelsImage::whereId($imageIds[1])
                ->update([
                    'path' => "/images/{$thumbnailName}"
                ]);
        }
        BlogCacheJob::dispatch();

        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function trash($id)
    {
        $blogId = (int) $id;
        Blog::query()->find($blogId)->delete();
         BlogCacheJob::dispatch();
        return back();
    }
}

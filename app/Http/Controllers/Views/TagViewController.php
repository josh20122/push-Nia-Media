<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Tag;
use Illuminate\Http\Request;

class TagViewController extends Controller
{
    public function index($slug, Request $request)
    {
        if (Tag::where('slug', $slug)->get()->count() < 1) {
            abort(404);
        }
        $tag = Tag::where('slug', $slug)->first();

        $blogs = Blog::whereHas('tags', function ($query) use ($tag) {
            $query->where('blog_tag.tag_id', $tag->id);
        })->latest('updated_at')
            ->with(['thumbnail', 'tags'])
            ->paginate();

        if ($request->wantsJson()) {
            return $blogs;
        }
        return inertia('Views/TagView', [
            'blogs' => fn () =>  $blogs,
            'tagName' => fn () =>  $tag->name,
        ]);
    }
}

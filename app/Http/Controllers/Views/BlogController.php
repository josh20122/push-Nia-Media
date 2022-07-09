<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Validation\Rules\Exists;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index($slug)
    {
        $exists = Blog::where('slug', $slug)
            ->count();

        if (!$exists) {
            abort(404);
        }

        $blog = Blog::query()
            ->with(['comments' => function ($query) {
                $query->latest();
            }, 'comments.user', 'comments.user.image', 'user', 'image'])
            ->where('slug', $slug)
            ->first();

        $tagIds = $blog
            ->tags[0]->pivot->pluck('tag_id');

        $related = Blog::query()
            ->where('slug', 'not like', $slug)
            ->with(['tags', 'thumbnail'])
            ->whereHas('tags', function ($query) use ($tagIds) {
                $query->whereIn('blog_tag.tag_id', $tagIds);
            })->latest()->limit(6)->get();


        $random = Cache::get('randomArticles');
        return Inertia::render('Views/BlogView', [
            'blog' => fn () => $blog,
            'related' => fn ()  => $related,
            'random' => fn () => $random,
        ]);
    }
}

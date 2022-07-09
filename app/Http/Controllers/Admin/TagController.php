<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Jobs\TagCacheJob;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use Inertia\Inertia;

class TagController extends Controller
{
    public function index()
    {
        $tags = Tag::query()
            ->withCount(['blogs', 'publishedBlogs'])
            ->paginate()
            ->through(fn ($tag) => [
                'name' => $tag->name,
                'id' => $tag->id,
                'can' => [
                    'delete' => Tag::find($tag->id)->blogs()->exists()
                ],
                'blogs_count' => $tag->blogs_count,
                'published_blogs_count' => $tag->published_blogs_count
            ]);

        return Inertia::render('Admin/Tags', [
            'tags' => $tags,
            'edit' => session('edit'),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:tags,name',
        ]);
        Tag::query()->create([
            'name' => $request->name,
            'slug' => Str::slug($request->name),

        ]);
TagCacheJob::dispatch();

        return back();
    }

    public function edit($id)
    {
        $tag = Tag::find($id);
        return back()->with('edit', $tag);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'edit' => 'required|max:20'
        ]);

        Tag::where('id', $id)->update([
            'name' => $request->edit,
            'slug' => Str::slug($request->edit),
        ]);
TagCacheJob::dispatch();

        return back();
    }

    public function destroy($id)
    {
        $tag = Tag::find($id);
        $hasBlogs = $tag->blogs()->exists();

        if ($hasBlogs) {
            abort(403, 'TAG HAS RELATED BLOGS');
        }

        $tag->delete();

        return back();
    }
}

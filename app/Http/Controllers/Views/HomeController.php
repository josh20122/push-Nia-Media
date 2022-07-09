<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Request $request)

    {

        $search = $request->input('search');


        if ($search) {
            $blogs = Blog::where('published', true)
                ->where('title', 'LIKE', "%{$search}%")
                ->with(['tags', 'thumbnail'])
                ->latest('updated_at')
                ->paginate()
                ->withQueryString();
        } else {
            $blogs = Cache::get('blogs');
        }

        if ($request->wantsJson()) {
            return $blogs;
        }

        return Inertia::render('Views/Home', [
            'blogs' => fn () =>  $blogs,
            'filter' => fn () =>  $request->input('search')
        ]);
    }
}

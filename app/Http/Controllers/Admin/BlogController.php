<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::with('user')->paginate();
        return Inertia::render('Admin/AllBlogs', [
            'blogs' => $blogs,
        ]);
    }
}

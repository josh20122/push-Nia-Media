<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        $userId = Auth::user()->id;
        $request->validate([
            'comment' => 'required|string',
        ]);


        User::find($userId)->comments()
            ->create([
                'content' => $request->comment,
                'blog_id' => $request->blogId,
            ]);

        return back();
    }
}

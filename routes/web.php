<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\Views\BlogController;
use App\Http\Controllers\Views\ContactController;
use App\Http\Controllers\Views\HomeController;
use App\Http\Controllers\Views\TagViewController;
use App\Http\Controllers\Views\YoutubeController;
use App\Models\Blog;
use App\Models\Tag;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::controller(HomeController::class)->group(function () {
    Route::get('/', 'index');
});

Route::controller(BlogController::class)->group(function () {
    Route::get('/blog/{slug}', 'index');
});

Route::get('/blogs', function () {
    return Tag::get('slug');
});

Route::get('/auth', function () {
    dd(Auth::user()->name);
    return  Auth::check() ? 'true' : 'false';
});

Route::controller(CommentController::class)->group(function () {
    Route::post('/comment/store', 'store')->middleware('auth');
});

Route::get('/tag/{slug}', [TagViewController::class, 'index']);

Route::controller(ContactController::class)->group(function () {
    Route::get('/contact', 'index');
    Route::post('/contact', 'contact');
});

Route::get('test', function () {
    return response()->download(public_path('favicon.ico'));
});

Route::get('tv', [YoutubeController::class, 'index']);

Route::view('/test','test');
<?php

use App\Http\Controllers\User\BlogController;
use App\Http\Controllers\User\ProfileController;
use Illuminate\Support\Facades\Route;

// Route::get('/admin/all-blogs', 'index');


Route::resource('blog', BlogController::class)->middleware(['auth']);

Route::post('/blog/trash/{id}', [BlogController::class, 'trash']);



Route::get('/trashed-blogs', [BlogController::class, 'trashed']);

Route::middleware(['auth'])->controller(ProfileController::class)->group(function () {
    Route::get('/my-profile', 'index');
    Route::post('/profile/update', 'updateMyprofile');
});

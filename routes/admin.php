<?php

use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\TagController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware(['admin', 'auth', 'auth.session'])->group(function () {
    Route::controller(BlogController::class)->group(function () {
        Route::get('/all-blogs', 'index');
    });

    Route::controller(UserController::class)->group(function () {
        Route::get('users', 'index');
        Route::get('/user/{id}/edit', 'edit');
        Route::post('/user/{id}/update', 'updateProfile');
    });

    Route::controller(TagController::class)->group(function () {
        Route::get('/tags', 'index');
        Route::post('/tags/store', 'store');
        Route::delete('/tags/{id}/delete', 'destroy');
        Route::put('/tags/{id}/edit', 'edit');
        Route::post('/tags/{id}/update', 'update');
    });
});

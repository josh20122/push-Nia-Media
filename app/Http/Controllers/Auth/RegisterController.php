<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Register');
    }

    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string|',
            'email' => 'required|email|string|max:50|unique:users,email,',
            'password' => 'required|string|max:50|alpha_num|confirmed|min:4',
            'password_confirmation' => 'required'
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'role' => 'USER',
            'password' => Hash::make($fields['password']),
        ]);

        $user->image()->create([
            'path' => '/images/avatar/default-avatar.jpg'
        ]);

        if (Auth::attempt(['email' => $fields['email'], 'password' => $fields['password']])) {
            $request->session()->regenerate();
            return redirect()->intended();
        }

        dd('success');
    }
}

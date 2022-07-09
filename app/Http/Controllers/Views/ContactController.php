<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Jobs\ContactJob;
use App\Mail\ContactMail;
use App\Mail\ContactReportMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Views/Contact');
    }

    public function contact(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|max:20',
            'email' => 'required|email|max:50|email',
            'subject' => 'required|min:8',
            'message' => 'required|min:8',
            'phone' => 'required'
        ]);

        $user = $request->input('email');





        dispatch(new ContactJob($request->input(), $user));

        return redirect()->back()->with("success", "Your datails have been submitted successfully");
    }
}

<?php

namespace App\Jobs;

use App\Mail\ContactMail;
use App\Mail\ContactReportMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class ContactJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public $user;
    public $request;
    public function __construct($request, $user)
    {
        $this->user = $user;
        $this->request = $request;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // $dsds = 'sjsjjs';
        Mail::to($this->user)->send(new ContactMail($this->request));
        Mail::to('ollieafricaman001@gmail.com')->send(new ContactReportMail($this->request));
    }
}

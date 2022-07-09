<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactReportMail extends Mailable
{
    use Queueable, SerializesModels;


    public $request;
    public function __construct(array $request)
    {
        $this->request = $request;
    }


    public function build()
    {
        return $this
            ->from('olliegroupafrica@gmail.com', 'Ollie Group Africa')
            ->subject('New Contact')
            ->markdown('mail.contact-report-mail');
    }
}

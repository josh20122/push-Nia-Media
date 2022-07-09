@component('mail::message')
# Ollie Group Support

Hello {{ $request['name']}} ,<br>
<p>
    Thanks for contacting NIA Media Kenya !
</p>
<p>
    This automatic reply is just to let you know that we have received your message and we'll 
    getback to you with a response as quickly as possible. During 8:00am - 6:00pm we do our 
    best to reply as quick as we can, usually within a couple of hours. Evenings and weekends 
    may take us a little bit longer.
</p>
<p>
    If you have a general question about our Loans, you’re welcome to browse our
     FAQ page for walkthroughs of all of our features and answers to frequently 
     asked questions.
</p>
<p>
    If you have any additional information that you think will help us to assist you, 
    please feel free to reply to this email.
</p>
<p>
    We look forward to chatting soon!
</p>
<p>
    Thanks, [Florentinah Hija], ^FH
</p>

Thanks,<br>
{{ config('app.name') }}
@endcomponent

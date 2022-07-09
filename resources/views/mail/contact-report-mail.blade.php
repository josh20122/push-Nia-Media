@component('mail::message')
# New Contact Report
@if (Auth::check())
<b>Contact from Authenticated User</b>
@else
 <b>Contact from unverified guest user<b>
@endif

<b>Name: </b> {{$request['name']}}<br/>
<b>Email: </b> {{$request['email']}}<br/>
<b>subject: </b> {{$request['subject']}}<br/>
<b>Message: </b> {{$request['message']}}


Thanks, NIA Media Kenya<br>
{{ config('app.name') }}
@endcomponent

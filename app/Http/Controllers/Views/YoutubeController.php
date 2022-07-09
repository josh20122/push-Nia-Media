<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class YoutubeController extends Controller
{
    public function index()
    {
        $apiKey = 'AIzaSyAwRXYBXDTv7ezcYbkJX7AHMAFPb7wDuew';
        $channelId = 'UCk0IYz5ANiia2xQahL0Dgmg';
        $response = Http::get("https://www.googleapis.com/youtube/v3/search?key={$apiKey}&channelId={$channelId}&part=snippet,id&order=date&maxResults=20");
        // printf(json_decode($response));
        // dd();
        return Inertia::render('Views/Tv', [
            'videos' => json_decode($response)->items,
        ]);
    }
}

<?php

namespace App\Http\Middleware;

use App\Models\Tag;
use App\Models\User;
use COM;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {

        if (Auth::check() && !Cache::has('role')) {
            Cache::put('role', Auth::user()->role);
        }
        return array_merge(parent::share($request), [
            'shared' => [
                'tags' => fn () =>  Cache::get('tags'),
                'otherTags' => fn () =>  Cache::get('otherTags'),
                'user' => [
                    'auth' => function () {
                        if (Auth::check()) {
                            return [
                                'check' => true,
                                'role' => fn () => Cache::get('role'),
                                'avatarPath' => fn () =>  User::find(Auth::user()->id)->image->path,
                            ];
                        }
                    }
                ]
            ]
        ]);
    }
}

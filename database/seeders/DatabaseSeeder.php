<?php

namespace Database\Seeders;

use App\Models\Blog;
use App\Models\BlogTag;
use App\Models\Comment;
use App\Models\Image;
use App\Models\Tag;
use Illuminate\Support\Str;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        Tag::factory()
            ->count(9)
            ->create();

        $user = User::create([
            'name' => 'josh',
            'role' => 'ADMIN',
            'email' => 'demo@demo.com',
            'email_verified_at' => now(),
            'password' => '$2y$10$7j3T6tAkMFfDqHYCPz0qAOBygDyJHNKIZhVSKc4eZmXLBXPPWoTt6', // demo
            'remember_token' => Str::random(10),
        ]);
        $user->image()->create([
            'path' => '/images/avatar/default-avatar.jpg',
        ]);
        User::factory(20)
            ->has(
                Blog::factory()
                    ->has(Image::factory()
                        ->count(1))
                    ->has(Comment::factory()
                        ->for($user)
                        ->count(8))
                    ->count(3)
            )
            ->has(Image::factory()
                ->count(1))
            ->create();

        $tagIds = Tag::pluck('id');

        $blogIds = Blog::pluck('id');

        foreach ($tagIds as $tagId) {
            foreach ($blogIds as $blogId) {
                BlogTag::create([
                    'tag_id' => $tagId,
                    'blog_id' => $blogId,
                ]);
            }
        }
    }
}

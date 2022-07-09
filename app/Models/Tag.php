<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;


    public function publishedBlogs()
    {
        return $this->blogs()->where('published', true);
    }

    protected $guarded = [
        //
    ];

    public function blogs()
    {
        return $this->belongsToMany(Blog::class)->using(BlogTag::class);
    }
}

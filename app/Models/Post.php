<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use hasFactory;
    protected $table = 'posts';

    public $fillable = [
        'id', 
        'title',
        'content',
        'created_at',
        'updated_at'
    ];
}

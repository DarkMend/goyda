<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'img', 'price', 'category'];

    function getImageUrl(){
        return Storage::url($this->img);
    }

    public function users(){
        return $this->belongsToMany(User::class, 'carts', 'product_id', 'user_id');
    }

    public function orders() {
        return $this->belongsToMany(Order::class, 'orders_product');
    }
}

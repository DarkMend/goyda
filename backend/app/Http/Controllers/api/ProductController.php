<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        return Product::select('id', 'name', 'description', 'img', 'price')->get();
    }

    public function show($id){
        $product = Product::select('id', 'name', 'description', 'img', 'price')->find($id);
        return $product;
    }
}

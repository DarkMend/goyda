<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function index()
    {
        return Product::select('id', 'name', 'description', 'img', 'price')->get();
    }

    public function show($id)
    {
        $product = Product::select('id', 'name', 'description', 'img', 'price')->find($id);
        return $product;
    }

    public function store(Request $request)
    {

        // $validator = Validator::make($request->all(), [
        //     'name' => ['required'],
        //     'description' => ['required'],
        //     'img' => ['required', 'mimes:jpg,jpeg,png'],
        //     'price' => ['required', 'integer']
        // ]);

        // if($validator->fails()){
        //     return response()->json([
        //         'message' => $validator->getMessageBag()
        //     ], 402);
        // }else{
        //     return response()->json([
        //         'message' => 'Успешно'
        //     ], 200);
        // }

        $validate = $request->validate([
            'name' => ['required'],
            'description' => ['required'],
            'img' => ['required', 'mimes:jpg,jpeg,png'],
            'price' => ['required', 'integer']
        ]);

        Product::create($validate);

        return response()->json(['data' => [], 'message' => 'Успешно'], 200);
    }
}

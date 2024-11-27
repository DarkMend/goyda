<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function index()
    {
        return ProductResource::collection(Product::all());
    }

    public function show($id)
    {
        $product = Product::select('id', 'name', 'description', 'img', 'price')->find($id);

        $image = Storage::url($product['img']);

        unset($product['img']);

        $product['img'] = $image;

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

        $data = $request->validate([
            'name' => ['required'],
            'description' => ['required'],
            'img' => ['required', 'mimes:jpg,jpeg,png'],
            'price' => ['required', 'integer']
        ]);

        $image = $request->file('img')->store('products');

        unset($data['img']);
        $data['img'] = $image;


        Product::create($data);

        return response()->json(['data' => [], 'message' => 'Успешно'], 200);
    }

    public function update(Request $request, $id)
    {
        $product = Product::find($id);

        $data = $request->validate([
            'name' => ['required'],
            'description' => ['required'],
            'img' => ['nullable', 'mimes:jpg,jpeg,png', 'image'],
            'price' => ['required', 'integer']
        ]);

        if ($data['img'] == null) {
            unset($data['img']);
            $data['img'] = $product['img'];
        } else {
            $image = $request->file('img')->store('products');

            unset($data['img']);
            $data['img'] = $image;
        }

        $product->update($data);

        return response()->json(['data' => [], 'message' => 'Успешно'], 200);
    }
}

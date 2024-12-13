<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CartResource;
use App\Models\Cart;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function index(){
        $user_id = Auth::id();
        $cart = Cart::where('user_id', $user_id)->with('product')->get();
        return CartResource::collection($cart); 
    }


    public function store($id) {
        $user = Auth::id();
        $data = Cart::create([
            'user_id' => $user,
            'product_id' => $id,
        ]);

        return response()->json(['data' => [$data], 'message' => 'Добавлено'], 200);
    }
}

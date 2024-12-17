<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;
use App\Models\Cart;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function index(){
        $orders = Order::where('user_id', Auth::id())->with('products')->get();
        return OrderResource::collection($orders);
    }

    public function store(){
        $user_id = Auth::id();

        DB::transaction(function() use ($user_id){
            $amount = 0;

            $carts = Cart::where('user_id', $user_id)->get();

            foreach($carts as $cart){
                $product = Product::where('id', $cart->product_id)->firstOrFail();
                $amount += $product->price * $cart->count; 
            }

            $order = Order::create([
                'user_id' => $user_id,
                'amount' => $amount,
                'status' => 1,
            ]);
    
            foreach($carts as $cart){
                $order->products()->attach($cart->product_id, ['count' => $cart->count]);
            };

            Cart::where('user_id', $user_id)->delete();
        });

        return response()->json(['data' => '', 'message' => 'Заказ создан'], 200);
     }
}

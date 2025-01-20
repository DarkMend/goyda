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
        if(Auth::user()->role == 2){
            $orders = Order::with('products')->get();
        }else{
            $orders = Order::where('user_id', Auth::id())->with('products')->get();
        }
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

    public function show($id){
        $order = Order::where('id', $id)->with('products')->first();
        return new OrderResource($order);
    }

    public function moveStatus($id){
        $user = Auth::user();

        if($user->role == 2){
            $order = Order::find($id);
            $status = $order->status + 1;
            $order->update([
                'status' => $status
            ]);
            
            return response()->json(['data' => $order, 'message' => 'Успех'], 200);
        }else{
            return response()->json(['message' => 'Эээ куда лезешь, не можешь ты'], 403);
        }
    }

    public function closeOrder($id){
        $user = Auth::user();

        if($user->role == 2){
            $order = Order::find($id);
            $order->update([
                'status' => 4
            ]);
            
            return response()->json(['data' => $order, 'message' => 'Успех'], 200);
        }else{
            return response()->json(['message' => 'Эээ куда лезешь, не можешь ты'], 403);
        }
    }
}

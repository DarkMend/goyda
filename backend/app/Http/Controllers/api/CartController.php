<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{

    public function addProduct($id) {
        $user = Auth::id();
        $data = Cart::create([
            'user_id' => $user,
            'product_id' => $id
        ]);

        return response()->json(['data' => [$data], 'message' => 'Добавлено'], 200);
    }
}

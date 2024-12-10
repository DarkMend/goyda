<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function reg(Request $request){
        $data = $request->validate([
            'name' => ['required'],
            'email' => ['required', 'unique:users'],
            'password' => ['required']
        ]);

        User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password'])
        ]);

        return response()->json(['data' => [], 'message' => 'Успешно'], 200);
    }

    public function login(Request $request){
        $data = $request->validate([
            'email' => ['required'],
            'password' => ['required']
        ]);

        if(!Auth::attempt($data)){
            return response()->json([
                'message' => 'Неверный email или пароль',
            ], 401);
        }

        $user = User::query()->where('email', $data['email'])->firstOrFail();
        $token = $user->createToken($user['email'])->plainTextToken;
        return response()->json(['data' => [], 'message' => 'Вы вошли', 'token' => $token], 200);
    }

    public function getAuthUser() {
        return response()->json(['user' => Auth::user()], 200);
    }
}

<?php

use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\api\CartController;
use App\Http\Controllers\api\OrderController;
use App\Http\Controllers\api\ProductController;
use App\Http\Controllers\api\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);

Route::post('/products', [ProductController::class, 'store']);
Route::post('/products/{id}', [ProductController::class, 'update']);
Route::delete('/products/{id}', [ProductController::class, 'destroy']);

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/get', [UserController::class, 'index']);
});

Route::controller(AuthController::class)->prefix('auth')->group(function () {
    Route::post('/reg',  'reg');
    Route::post('/login', 'login');
});

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/me', [AuthController::class, 'getAuthUser']);
    Route::post('/auth/logout', [AuthController::class, 'logout']);
});

Route::middleware(['middleware' => 'auth:sanctum'])->controller(CartController::class)->prefix('cart')->group(function () {
    Route::post('/add-product/{id}', 'store');
    Route::get('', 'index');
    Route::delete('/{id}', 'destroy');
    Route::post('/count-update/{id}', 'updateCount');
});

Route::middleware(['middleware'=>'auth:sanctum'])->controller(OrderController::class)->prefix('orders')->group(function () {
    Route::get('', 'index');
    Route::post('', 'store');
});
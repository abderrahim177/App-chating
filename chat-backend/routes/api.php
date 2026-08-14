<?php

use App\Http\Controllers\Authcontroller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register' , [Authcontroller::class , 'Register']);
Route::post('/login' , [Authcontroller::class , 'Login']);
Route::get('/user', function (Request $request) {
    return $request->user();
    Route::post('/logout' ,  [Authcontroller::class , "Logout"]);
})->middleware('auth:sanctum');

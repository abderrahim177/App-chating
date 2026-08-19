<?php

use App\Http\Controllers\Authcontroller;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\CreatuserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Route;

// Public Routes
Route::post('/register', [Authcontroller::class, 'Register']);
Route::post('/login', [Authcontroller::class, 'Login']);

// Protected Routes (Sanctum)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/creatUser' , [CreatuserController::class , 'Create']);
    // التوثيق التلقائي للـ Private Channels فـ Reverb / Echo
    Broadcast::routes();

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/logout', [Authcontroller::class, 'Logout']);
    
    // Chat Endpoints
    Route::post('/messages', [ChatController::class, 'sendMessage']);
    Route::get('/conversations/{conversation}/messages', [ChatController::class, 'getMessages']);
});
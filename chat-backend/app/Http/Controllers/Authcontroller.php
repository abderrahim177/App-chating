<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
class Authcontroller extends Controller
{
    public function Register(RegisterRequest $request){
        $ValidateInputs = $request->validated();
        $user = User::create([
            "name" => $ValidateInputs['name'],
            "email" => $ValidateInputs['email'],
            "password" =>Hash::make($ValidateInputs['password']),
        ]);
         $token = $user->createToken('auth_token')->plainTextToken;

         return response()->json([
            "status" => "success",
            "message" => "acount created succesfuly !",
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ],
            'token' => $token,
         ], 201);
    }
    public function Login(AuthRequest $request){
        $ValidateInputs = $request->validated();

        if(!Auth::attempt($ValidateInputs)){
            return response()->json([
                'status'  => 'error',
                'message' => 'Les identifiants sont incorrects !'
            ], 401);
        }
        $user = User::where('email', $ValidateInputs['email'])->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json([
            'status'  => 'success',
            'message' => 'Connexion réussie !',
            'user'    => [
                'id'    => $user->id,
                'name'  => $user->name,
                'email' => $user->email,
                'role'  => $user->role,
            ],
            'token'   => $token
        ], 200);
    }
    public function Logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            "status" => "success",
            "message" => "Logout with success",
        ]);
    }
}

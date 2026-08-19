<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatuserReuest;
use App\Models\User;
use Illuminate\Http\Request;

class CreatuserController extends Controller
{
   public function Create(CreatuserReuest $request){
        $validateInfo = $request->validated();
        User::create([
            'name' => $validateInfo['name'],
            'phone' => $validateInfo['phone'],
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'User Created successfuly',
        ], 201);
   }
   public function Getusers(){
        $users = User::all();
        return response()->json($users , 200);
   }
}

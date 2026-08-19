<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Events\MessageSent;
use Illuminate\Http\Request;
use App\Models\Conversation;
use Illuminate\Support\Facades\Auth;
class ChatController extends Controller
{

public function sendMessage(Request $request)
{
    $request->validate([
        'conversation_id' => 'required|exists:conversations,id',
        'body' => 'required|string',
    ]);

    $message = Message::create([
        'user_id' => Auth::id(),
        'conversation_id' => $request->conversation_id,
        'body' => $request->body,
    ]);

    // بث المسج للطرف الآخر
    broadcast(new MessageSent($message))->toOthers();

    return response()->json($message->load('user'));
}
public function getMessages(Conversation $conversation)
    {
        // 1. التحقق من أن المستخدم المشارك ينتمي لهذه المحادثة
        if (!$conversation->users->contains(Auth::id())) {
            return response()->json([
                'message' => 'Unauthorized access to this conversation.'
            ], 403);
        }

        // 2. جلب الرسائل مرتبة من القديم للجديد مع بيانات المرسل
        $messages = $conversation->messages()
            ->with('user:id,name,email') // جلب البيانات الأساسية فقط للمرسل
            ->oldest() // ترتيب حسب الوقت (من القديم للجديد)
            ->get();

        return response()->json($messages);
    }
}

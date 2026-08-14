<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('conversation_id')->constrained()->onDelete('cascade');
            $table->foreignId('sender_id')->constrained('users')->onDelete('cascade');
            $table->text('body')->nullable(); // النص
            $table->enum('type', ['text', 'image', 'file', 'audio'])->default('text');
            $table->string('attachment_url')->nullable(); // مسار الملف/الصورة فـ storage
            $table->string('attachment_name')->nullable(); // اسم الملف الأصلي (مثلاً Abstract_Design.png)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('messages');
    }
};

import React, { useState } from "react";
import {
  BiSearch,
  BiArchive,
  BiChevronDown,
  BiMessageSquareAdd,
} from "react-icons/bi";
import AmazanLogo from "./AmazanLogo";
import NewChatSidebar from "./NewChatSidebar";
import NewContactSidebar from "./NewContactSidebar"; // <-- Import للكومبوننت الجديد

const contactsData = [
  { id: 1, name: "Kailey", message: "Say My Name", time: "9:30", status: "online", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" },
  { id: 2, name: "Maryjane", message: "Check On It", time: "12:02", status: "offline", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100" },
  { id: 3, name: "Niko", message: "You Send Me", time: "10:35", status: "online", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" },
];

function SecondarySidebar() {
  // Navigation State: 'chats' | 'newChat' | 'newContact'
  const [currentView, setCurrentView] = useState("chats");

  // 1. شاشة إضافة جهة اتصال جديدة
  if (currentView === "newContact") {
    return <NewContactSidebar onBack={() => setCurrentView("newChat")} />;
  }

  // 2. شاشة New Chat
  if (currentView === "newChat") {
    return (
      <NewChatSidebar
        onBack={() => setCurrentView("chats")}
        onNewContactClick={() => setCurrentView("newContact")}
      />
    );
  }

  // 3. الشاشة الرئيسية ديال المحادثات
  return (
    <aside className="w-60 bg-slate-50 dark:bg-[#1e2738] text-gray-800 dark:text-[#f8f9fb] flex flex-col p-3 h-screen border-r border-gray-200 dark:border-gray-800/60 shrink-0 transition-colors">
      {/* Header */}
      <div className="mb-3 px-1 flex items-center justify-between overflow-hidden">
        <div className="flex items-center justify-start">
          <AmazanLogo className="w-36 h-auto" />
        </div>

        <button
          type="button"
          title="Nouveau message"
          onClick={() => setCurrentView("newChat")}
          className="p-2 rounded-lg transition-all duration-200 
                   text-slate-700 hover:bg-slate-200/70 active:scale-95
                   dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <BiMessageSquareAdd className="w-6 h-6" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-4">
        <BiSearch
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={16}
        />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-white dark:bg-[#141b29] text-xs text-gray-800 dark:text-white rounded-lg py-2 pl-9 pr-3 border border-gray-200 dark:border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-500 shadow-xs dark:shadow-none"
        />
      </div>

      {/* Archive */}
      <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 mb-3 px-1 cursor-pointer hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
        <div className="flex items-center gap-2">
          <BiArchive size={16} />
          <span className="text-xs font-medium">Archive</span>
        </div>
        <BiChevronDown size={14} />
      </div>

      {/* Chats List */}
      <div className="flex-1 flex flex-col gap-2 space-y-0.5 overflow-y-auto pr-1">
        {contactsData.map((contact) => (
          <div
            key={contact.id}
            className={`flex items-center gap-2.5 px-2.5 py-1 rounded-lg cursor-pointer transition-colors ${
              contact.id === 1
                ? "bg-blue-500/10 text-blue-600 dark:text-white font-medium"
                : "hover:bg-gray-200/60 dark:hover:bg-[#141b29]/50 text-gray-600 dark:text-gray-300"
            }`}
          >
            <div className="relative shrink-0">
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div
                className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-slate-50 dark:border-[#1e2738] ${
                  contact.status === "online" ? "bg-green-500" : "bg-gray-400 dark:bg-gray-500"
                }`}
              ></div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-0.5">
                <h4 className="text-xs font-medium truncate text-gray-900 dark:text-white">
                  {contact.name}
                </h4>
                <span className="text-[8px] text-gray-400 shrink-0">
                  {contact.time}
                </span>
              </div>
              <p className="text-[8px] text-gray-500 dark:text-gray-400 truncate">
                {contact.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default SecondarySidebar;
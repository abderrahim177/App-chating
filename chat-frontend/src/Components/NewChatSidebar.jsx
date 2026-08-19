import React, { useEffect, useState } from "react";
import { 
  BiArrowBack, 
  BiSearch, 
  BiUserPlus, 
  BiGroup, 
  BiGroup as BiCommunity 
} from "react-icons/bi";

import api from "../Api/axios";

function NewChatSidebar({ onBack, onNewContactClick, onSelectUser }) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await api.get("/getUsers");

      const dataArray = Array.isArray(res.data)
        ? res.data
        : res.data.data || [];

      setData(dataArray);
    } catch (err) {
      console.error("Erreur API:", err);
      setError("Impossible de charger les utilisateurs.");
    } finally {
      setLoading(false);
    }
  };

  // تصفية المستخدمين حسب ما يكتبه المستخدم في خانة البحث
  const filteredUsers = data.filter((user) => {
    const term = searchTerm.toLowerCase();
    
    // تحويل القيمة لـ String بأمان تجنباً لأي خطأ
    const nameMatch = String(user.name || '').toLowerCase().includes(term);
    const phoneMatch = String(user.phone || '').toLowerCase().includes(term);

    return nameMatch || phoneMatch;
  });

  // دالة لاستخراج الحروف الأولى من اسم المستخدم للـ Avatar
  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <aside className="w-60 bg-slate-50 dark:bg-[#1e2738] text-gray-800 dark:text-[#f8f9fb] flex flex-col p-3 h-screen border-r border-gray-200 dark:border-gray-800/60 shrink-0 transition-colors animate-fadeIn">
      {/* Header */}
      <div className="mb-4 px-1 flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          title="Retour"
          className="cursor-pointer p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700/60 text-gray-700 dark:text-gray-200 transition-colors"
        >
          <BiArrowBack size={20} />
        </button>
        <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
          New chat
        </h2>
      </div>

      {/* Search Input */}
      <div className="relative mb-4">
        <BiSearch
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={16}
        />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search name, number..."
          className="w-full bg-white dark:bg-[#141b29] text-xs text-gray-800 dark:text-white rounded-lg py-2 pl-9 pr-3 border border-gray-200 dark:border-transparent focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder-gray-400 dark:placeholder-gray-500 shadow-xs dark:shadow-none"
        />
      </div>

      {/* Options & Users List */}
      <div className="flex-1 overflow-y-auto space-y-1 pr-1">
        {/* New Group */}
        <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-200/60 dark:hover:bg-[#141b29]/50 transition-colors">
          <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
            <BiGroup size={20} />
          </div>
          <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
            New group
          </span>
        </div>

        {/* New Contact */}
        <div 
          onClick={onNewContactClick}
          className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-200/60 dark:hover:bg-[#141b29]/50 transition-colors"
        >
          <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
            <BiUserPlus size={20} />
          </div>
          <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
            New contact
          </span>
        </div>

        {/* New Community */}
        <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-200/60 dark:hover:bg-[#141b29]/50 transition-colors">
          <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
            <BiCommunity size={20} />
          </div>
          <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
            New community
          </span>
        </div>

        <hr className="my-3 border-gray-200 dark:border-gray-800" />

        {/* Display Loading State */}
        {loading && (
          <div className="text-center py-4 text-xs text-gray-400">
            Loading contacts...
          </div>
        )}

        {/* Display Error Message */}
        {error && (
          <div className="text-center py-2 text-xs text-rose-500">
            {error}
          </div>
        )}

        {/* Display Fetched Users */}
        {!loading && filteredUsers.map((user) => (
          <div
            key={user.id}
            onClick={() => onSelectUser && onSelectUser(user)}
            className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-200/60 dark:hover:bg-[#141b29]/50 transition-colors"
          >
            <div className="w-9 h-9 rounded-full bg-slate-300 dark:bg-slate-700/80 flex items-center justify-center shrink-0 overflow-hidden">
              <span className="text-xs font-bold text-gray-700 dark:text-gray-200">
                {getInitials(user.name)}
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-medium text-gray-900 dark:text-white truncate">
                {user.name}
              </span>
              <span className="text-[10px] text-gray-400 truncate">
                {user.phone}
              </span>
            </div>
          </div>
        ))}

        {!loading && filteredUsers.length === 0 && !error && (
          <div className="text-center py-4 text-xs text-gray-400">
            No contacts found
          </div>
        )}
      </div>
    </aside>
  );
}

export default NewChatSidebar;
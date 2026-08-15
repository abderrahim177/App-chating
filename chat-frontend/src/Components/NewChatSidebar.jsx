import React from "react";
import { 
  BiArrowBack, 
  BiSearch, 
  BiUserPlus, 
  BiGroup, 
  BiGroup as BiCommunity // أو استعمل أيقونة مناسبة
} from "react-icons/bi";

function NewChatSidebar({ onBack }) {
  return (
    <aside className="w-60 bg-slate-50 dark:bg-[#1e2738] text-gray-800 dark:text-[#f8f9fb] flex flex-col p-3 h-screen border-r border-gray-200 dark:border-gray-800/60 shrink-0 transition-colors animate-fadeIn">
      {/* Header مع السهم لرجوع */}
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
          placeholder="Search name, number or @username"
          className="w-full bg-white dark:bg-[#141b29] text-xs text-gray-800 dark:text-white rounded-lg py-2 pl-9 pr-3 border border-gray-200 dark:border-transparent focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder-gray-400 dark:placeholder-gray-500 shadow-xs dark:shadow-none"
        />
      </div>

      {/* Options List */}
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
        <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-200/60 dark:hover:bg-[#141b29]/50 transition-colors">
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

        {/* Message Yourself */}
        <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-200/60 dark:hover:bg-[#141b29]/50 transition-colors">
          <div className="w-9 h-9 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center shrink-0 overflow-hidden">
            <span className="text-xs font-bold text-gray-700 dark:text-gray-200">YOU</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-medium text-gray-900 dark:text-white truncate">
              +212 710-265373 (You)
            </span>
            <span className="text-[10px] text-gray-400 truncate">
              Message yourself
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default NewChatSidebar;
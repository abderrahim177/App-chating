import React, { useState } from "react";
import { 
  BiArrowBack, 
  BiUser, 
  BiAt, 
  BiPhone, 
  BiRefresh, 
  BiCheck 
} from "react-icons/bi";

function NewContactSidebar({ onBack }) {
  const [syncPhone, setSyncPhone] = useState(false);

  return (
    <aside className="w-60 bg-slate-50 dark:bg-[#1e2738] text-gray-800 dark:text-[#f8f9fb] flex flex-col p-3 h-screen border-r border-gray-200 dark:border-gray-800/60 shrink-0 transition-colors animate-fadeIn">
      {/* Header */}
      <div className="mb-6 px-1 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            title="Retour"
            className="cursor-pointer p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700/60 text-gray-700 dark:text-gray-200 transition-colors"
          >
            <BiArrowBack size={20} />
          </button>
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
            New contact
          </h2>
        </div>

        {/* Save Button */}
        <button
          type="button"
          title="Save Contact"
          className="cursor-pointer p-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white transition-colors shadow-xs"
        >
          <BiCheck size={20} />
        </button>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto space-y-6 pr-1">
        
        {/* First name & Last name Group */}
        <div className="flex items-start gap-3">
          <BiUser className="text-gray-400 dark:text-gray-400 mt-2 shrink-0" size={20} />
          <div className="flex-1 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="First name"
                className="w-full bg-transparent text-xs text-gray-900 dark:text-white py-1 border-b border-gray-300 dark:border-gray-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none transition-colors placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Last name"
                className="w-full bg-transparent text-xs text-gray-900 dark:text-white py-1 border-b border-gray-300 dark:border-gray-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none transition-colors placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Username */}
        <div className="flex items-center gap-3">
          <BiAt className="text-gray-400 dark:text-gray-400 shrink-0" size={20} />
          <div className="flex-1">
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-transparent text-xs text-gray-900 dark:text-white py-1 border-b border-gray-300 dark:border-gray-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none transition-colors placeholder-gray-400 dark:placeholder-gray-500"
            />
          </div>
        </div>

        {/* Country & Phone */}
        <div className="flex items-start gap-3">
          <BiPhone className="text-gray-400 dark:text-gray-400 mt-2 shrink-0" size={20} />
          <div className="flex-1 grid grid-cols-12 gap-2">
            <div className="col-span-5 relative">
              <label className="text-[10px] text-gray-400 block mb-0.5">Country</label>
              <select className="w-full bg-transparent text-xs text-gray-900 dark:text-white py-1 border-b border-gray-300 dark:border-gray-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none cursor-pointer">
                <option value="+212" className="bg-slate-50 dark:bg-[#1e2738]">MA +212</option>
                <option value="+33" className="bg-slate-50 dark:bg-[#1e2738]">FR +33</option>
                <option value="+1" className="bg-slate-50 dark:bg-[#1e2738]">US +1</option>
              </select>
            </div>
            <div className="col-span-7 relative">
              <label className="text-[10px] text-gray-400 block mb-0.5">Phone</label>
              <input
                type="tel"
                placeholder="0612345678"
                className="w-full bg-transparent text-xs text-gray-900 dark:text-white py-1 border-b border-gray-300 dark:border-gray-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none transition-colors placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Sync to phone Toggle */}
        <div className="pt-2 flex items-center justify-between gap-2">
          <div className="flex items-start gap-3">
            <BiRefresh className="text-gray-400 dark:text-gray-400 mt-0.5 shrink-0" size={20} />
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-900 dark:text-white">
                Sync contact to phone
              </span>
              <span className="text-[9px] text-gray-400 dark:text-gray-400">
                This contact will be added to your phone's address book.
              </span>
            </div>
          </div>

          {/* Toggle Switch */}
          <button
            type="button"
            onClick={() => setSyncPhone(!syncPhone)}
            className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors shrink-0 ${
              syncPhone ? "bg-emerald-500 justify-end" : "bg-gray-300 dark:bg-gray-700 justify-start"
            }`}
          >
            <div className="w-4 h-4 rounded-full bg-white shadow-xs" />
          </button>
        </div>

      </div>
    </aside>
  );
}

export default NewContactSidebar;
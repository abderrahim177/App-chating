import { useState } from 'react';
import axios from "axios";
import { BiDotsVerticalRounded, BiPhone, BiCameraHome, BiPaperclip, BiSend, BiMicrophone, BiImageAdd } from 'react-icons/bi';
import { CiImageOn } from 'react-icons/ci';
import "../App.css";

function MainChatView({ onProfileClick }) {
  const [message, setMessage] = useState('');
  const [error , seterror] = useState(null)
  const [loading , setloading] = useState(true)

  const handelsubmit = async(e) => {
    e.preventDefault()
    setloading(true)
    const token = sessionStorage.getItem('token')
    const response = await axios.post('/',
      message,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
    }
  return (
    <section className="flex-1 bg-slate-100 dark:bg-[#141b29] text-gray-800 dark:text-[#e0e3e9] flex flex-col h-screen overflow-hidden transition-colors">
      
      {/* Header */}
      <header className="px-5 py-2.5 bg-white dark:bg-[#1e2738] border-b border-gray-200 dark:border-gray-800/80 flex justify-between items-center shrink-0 shadow-xs dark:shadow-sm z-10">
        
        {/* Profile Info */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={onProfileClick}
        >
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120" 
              alt="Kailey" 
              className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-gray-700/50 group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white dark:border-[#1e2738]"></div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-tight group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">Kailey</h3>
            <span className="text-[11px] text-green-600 dark:text-green-400 font-medium">Online</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800/60 rounded-full cursor-pointer text-gray-600 dark:text-gray-300 transition-colors">
            <BiCameraHome size={18} />
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800/60 rounded-full cursor-pointer text-gray-600 dark:text-gray-300 transition-colors">
            <BiPhone size={18} />
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800/60 rounded-full cursor-pointer text-gray-600 dark:text-gray-300 transition-colors">
            <BiDotsVerticalRounded size={18} />
          </button>
        </div>
      </header>

      {/* Chat Messages Area */}
      <div className=" flex-1 p-4 md:p-6 space-y-3 overflow-y-auto">
        <div className="text-center text-gray-400 dark:text-gray-500 text-[11px] font-semibold my-1">Today</div>
        
        {/* Received Message */}
        <div className="flex gap-2 items-end max-w-[70%]">
          <div className="bg-white dark:bg-[#1e2738] px-3.5 py-1 rounded-4xl rounded-bl-xs text-xs text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800/50 shadow-xs dark:shadow-sm leading-relaxed">
            Say My Name...
            <span className="block text-[9px] text-gray-400 dark:text-gray-500 text-right mt-0.5">09:30</span>
          </div>
        </div>

        {/* Sent Message */}
        <div className="flex gap-2 items-end justify-end ml-auto max-w-[70%]">
          <div className="bg-blue-600 px-3.5 py-1 rounded-4xl rounded-br-xs text-xs text-white shadow-xs dark:shadow-sm leading-relaxed">
            Can you please send this in file format?
            <span className="block text-[9px] text-blue-100 dark:text-blue-200 text-right mt-0.5">09:31</span>
          </div>
        </div>
        
        {/* Received Image Message */}
        <div className="flex gap-2 items-end max-w-[65%]">
          <div className="bg-white dark:bg-[#1e2738] p-2 rounded-4xl rounded-bl-xs border border-gray-200 dark:border-gray-800/50 shadow-xs dark:shadow-sm">
            <div className="bg-slate-50 dark:bg-[#141b29] rounded-2xl p-6 flex flex-col items-center justify-center border border-gray-200 dark:border-gray-800/40">
              <CiImageOn size={48} className="text-gray-400 dark:text-gray-500 mb-1 cursor-pointer" />
              <span className="text-[11px] text-gray-500 dark:text-gray-400">Abstract_Design.png</span>
            </div>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-2 px-1">Here You Go</p>
            <span className="block text-[9px] text-gray-400 dark:text-gray-500 text-right px-1 mt-0.5">09:35</span>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <footer className="p-3 shrink-0">
        <div className="flex items-center gap-2 mb-3 bg-white dark:bg-[#202838] px-3 py-1 rounded-4xl border border-gray-200 dark:border-gray-800/60 focus-within:border-blue-500/60 shadow-xs dark:shadow-none transition-all">
          
          {/* File/Image Upload Buttons */}
          <div className="flex items-center gap-1 text-gray-400 dark:text-gray-400">
            <button type="button" className="p-1.5 cursor-pointer hover:text-gray-700 dark:hover:text-white rounded-lg transition-colors" title="Attach file">
              <BiPaperclip size={18} />
            </button>
            <button type="button" className="p-1.5 cursor-pointer hover:text-gray-700 dark:hover:text-white rounded-lg transition-colors" title="Attach Image/Video">
              <BiImageAdd size={18} />
            </button>
          </div>

          {/* Text Input */}
          <input 
            type="text" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a message..." 
            className="w-full text-xs text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none px-1"
          />

          {/* Dynamic Send / Mic Icon */}
          {message.trim() ? (
            <button type="submit" className="p-2 cursor-pointer bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors shrink-0">
              <BiSend size={15} />
            </button>
          ) : (
            <button type="button" className="p-2 hover:bg-blue-700 bg-blue-600 rounded-full cursor-pointer hover:text-gray-100 text-white dark:text-white  transition-colors shrink-0" title="Voice Message">
              <BiMicrophone size={18} />
            </button>
          )}

        </div>
      </footer>

    </section>
  );
}

export default MainChatView;
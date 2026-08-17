import { useState } from 'react';
import { BiConversation, BiGroup, BiPhone, BiCog, BiSun, BiMoon } from 'react-icons/bi';

function PrimarySidebar({ darkMode, setDarkMode }) {
  const [activeNav, setActiveNav] = useState('chats');

  const navItems = [
    { name: 'chats', icon: <BiConversation size={20} /> },
    { name: 'groups', icon: <BiGroup size={20} /> },
    { name: 'calls', icon: <BiPhone size={20} /> },
    { name: 'settings', icon: <BiCog size={20} /> },
  ];

  return (
    <aside className="w-13 bg-white dark:bg-[#181f30] text-gray-500 dark:text-[#8b9bb4] flex flex-col justify-between items-center py-4 border-r border-gray-200 dark:border-gray-800/60 h-screen shrink-0 transition-colors">
      
      {/* Navigation Icons */}
      <div className="flex flex-col gap-3 w-full items-center">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveNav(item.name)}
            className={`w-10 h-10 rounded-xl flex items-center cursor-pointer justify-center transition-all ${
              activeNav === item.name
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800/60 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {item.icon}
          </button>
        ))}
      </div>

      {/* Dark mode toggle & Profile Avatar */}
      <div className="flex flex-col gap-4 items-center w-full">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="relative w-10 h-5 rounded-full cursor-pointer bg-gray-300 dark:bg-gray-700/80 flex items-center p-0.5 transition-colors"
        >
          <BiSun className="text-yellow-500 absolute left-1" size={12}/>
          <BiMoon className="text-gray-400 absolute right-1" size={12}/>
          <div className={`w-4 h-4 rounded-full bg-white transition-transform transform shadow-sm ${
            darkMode ? 'translate-x-5' : 'translate-x-0'
          }`}></div>
        </button>

        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" 
            alt="My Profile" 
            className="cursor-pointer w-9 h-9 rounded-full object-cover" 
          />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white dark:border-[#181f30]"></div>
        </div>
      </div>

    </aside>
  );
}

export default PrimarySidebar;
import { 
  BiX, 
  BiPhone, 
  BiUserCircle, 
  BiMessageDetail, 
  BiNotification, 
  BiImage, 
  BiLinkExternal 
} from 'react-icons/bi';

function ProfileDetailsSidebar({ onClose }) {
  const profileInfo = [
    { icon: <BiMessageDetail size={16}/>, text: 'Hey there! I am using ChatNow.', title: 'About' },
    { icon: <BiPhone size={16}/>, text: '+1 123 456 7890', title: 'Phone' },
    { icon: <BiUserCircle size={16}/>, text: '@kailey_sm', title: 'Username' },
    { icon: <BiNotification size={16}/>, text: 'Off', title: 'Mute Notifications' },
  ];

  return (
    <aside className="w-72 bg-[#1e2738] text-[#e0e3e9] flex flex-col h-screen p-5 border-l border-gray-800/60 animate-slide-in-right overflow-y-auto shrink-0">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-semibold text-white">Contact Details</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
          <BiX size={20} />
        </button>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col items-center mb-6 border-b border-gray-800/60 pb-6">
        <img 
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" 
          alt="Kailey" 
          className="w-20 h-20 rounded-full mb-3 object-cover shadow-md" 
        />
        <h2 className="text-base font-bold text-white mb-0.5">Kailey</h2>
        <p className="text-xs text-gray-400">San Francisco, CA</p>
      </div>

      {/* Info Items */}
      <div className="space-y-3 flex-1">
        <h4 className="text-gray-500 text-[10px] font-semibold uppercase tracking-wider mb-2">Info</h4>
        
        {profileInfo.map((item, index) => (
          <div key={index} className="flex items-center gap-3 p-2.5 bg-[#141b29] rounded-lg border border-gray-800/40">
            <div className="text-blue-500 shrink-0">{item.icon}</div>
            <div className="min-w-0">
              <p className="text-[10px] text-gray-500">{item.title}</p>
              <p className="text-xs font-medium text-gray-200 truncate">{item.text}</p>
            </div>
          </div>
        ))}

        {/* Media */}
        <div className="pt-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-gray-500 text-[10px] font-semibold uppercase tracking-wider">Shared Media</h4>
            <BiLinkExternal className="text-gray-400 hover:text-white cursor-pointer" size={14} />
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((item) => (
              <div 
                key={item} 
                className="bg-[#141b29] aspect-square rounded-lg flex items-center justify-center text-gray-500 border border-gray-800/40 hover:bg-gray-800/30 transition-colors cursor-pointer"
              >
                <BiImage size={20} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </aside>
  );
}

export default ProfileDetailsSidebar;
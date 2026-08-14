import { useState } from 'react';
import PrimarySidebar from './components/PrimarySidebar';
import SecondarySidebar from './components/SecondarySidebar';
import MainChatView from './components/MainChatView';
import ProfileDetailsSidebar from './components/ProfileDetailsSidebar';

function App() {
  const [isProfileSidebarOpen, setIsProfileSidebarOpen] = useState(false);

  return (
    // Main Container (flex row)
    <div className="flex h-screen w-screen overflow-hidden font-sans">
      
      {/* 1. L-Iyssar Al-Awwal (Icons) */}
      <PrimarySidebar />
      
      {/* 2. L-Iyssar Al-Tani (Chats List) */}
      <SecondarySidebar />
      
      {/* 3. L-Wast (Header, Chat) */}
      {/* Pass a function to handle profile click */}
      <MainChatView onProfileClick={() => setIsProfileSidebarOpen(true)} />
      
      {/* 4. L-Īman (Conditional Render) */}
      {isProfileSidebarOpen && (
        <ProfileDetailsSidebar onClose={() => setIsProfileSidebarOpen(false)} />
      )}
      
    </div>
  );
}

export default App;
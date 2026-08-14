import { useState, useEffect } from 'react';
import PrimarySidebar from './components/PrimarySidebar';
import SecondarySidebar from './components/SecondarySidebar';
import MainChatView from './components/MainChatView';
import ProfileDetailsSidebar from './components/ProfileDetailsSidebar';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="flex h-screen w-screen overflow-hidden font-sans">
      <PrimarySidebar darkMode={darkMode} setDarkMode={setDarkMode} />
      <SecondarySidebar />
      <MainChatView onProfileClick={() => setIsProfileOpen(true)} />
      {isProfileOpen && (
        <ProfileDetailsSidebar onClose={() => setIsProfileOpen(false)} />
      )}
    </div>
  );
}

export default App;
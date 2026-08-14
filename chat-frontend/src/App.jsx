import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './Authentication/login';
import PrimarySidebar from './components/PrimarySidebar';
import SecondarySidebar from './components/SecondarySidebar';
import MainChatView from './components/MainChatView';
import ProfileDetailsSidebar from './components/ProfileDetailsSidebar';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

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
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route 
        path="/AmazanChat" 
        element={
          <ProtectedRoute>
            <div className="flex h-screen w-screen overflow-hidden font-sans">
              <PrimarySidebar darkMode={darkMode} setDarkMode={setDarkMode} />
              <SecondarySidebar />
              <MainChatView onProfileClick={() => setIsProfileOpen(true)} />
              {isProfileOpen && (
                <ProfileDetailsSidebar onClose={() => setIsProfileOpen(false)} />
              )}
            </div>
          </ProtectedRoute>
        } 
      />

      <Route 
        path="*" 
        element={
          localStorage.getItem('token') 
            ? <Navigate to="/AmazanChat" replace /> 
            : <Navigate to="/login" replace />
        } 
      />
    </Routes>
  );
}

export default App;
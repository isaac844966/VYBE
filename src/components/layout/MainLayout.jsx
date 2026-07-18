import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useAuth } from '../../context/AuthContext';

const MainLayout = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        {isAuthenticated && <Sidebar />}
        <main className={`flex-1 pt-16 ${isAuthenticated ? 'lg:ml-64' : ''}`}>
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
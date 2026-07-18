import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiHome,
  FiCompass,
  FiMusic,
  FiDisc3,
  FiUsers,
  FiHeart,
  FiClock,
  FiList,
  FiSettings,
  FiBell,
  FiHelpCircle,
} from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { ROUTES } from '../../constants';

const Sidebar = () => {
  const location = useLocation();
  const { sidebarCollapsed, toggleSidebar, mobileMenuOpen, closeMobileMenu } = useTheme();
  const { isAuthenticated } = useAuth();

  const menuItems = [
    { label: 'Home', icon: FiHome, path: ROUTES.HOME },
    { label: 'Discover', icon: FiCompass, path: ROUTES.DISCOVER },
    { label: 'Browse', icon: FiMusic, path: ROUTES.BROWSE },
  ];

  const libraryItems = [
    { label: 'Liked Songs', icon: FiHeart, path: ROUTES.FAVORITES },
    { label: 'Recently Played', icon: FiClock, path: ROUTES.RECENTLY_PLAYED },
    { label: 'Albums', icon: FiDisc3, path: ROUTES.ALBUMS },
    { label: 'Artists', icon: FiUsers, path: ROUTES.ARTISTS },
    { label: 'Playlists', icon: FiList, path: ROUTES.PLAYLISTS },
  ];

  const settingsItems = [
    { label: 'Notifications', icon: FiBell, path: ROUTES.NOTIFICATIONS },
    { label: 'Settings', icon: FiSettings, path: ROUTES.SETTINGS },
    { label: 'Help', icon: FiHelpCircle, path: ROUTES.HELP },
  ];

  const NavLink = ({ item }) => {
    const isActive = location.pathname === item.path;
    const Icon = item.icon;

    return (
      <Link
        to={item.path}
        onClick={closeMobileMenu}
        className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-smooth duration-200 ${
          isActive
            ? 'bg-primary text-white'
            : 'text-text hover:bg-surface'
        }`}
      >
        <Icon size={20} />
        {!sidebarCollapsed && <span className="text-sm font-medium">{item.label}</span>}
      </Link>
    );
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-border flex-col overflow-y-auto">
        <div className="p-4 space-y-2">
          <h3 className="text-xs font-bold text-muted uppercase tracking-wider px-4">Menu</h3>
          {menuItems.map((item) => (
            <NavLink key={item.path} item={item} />
          ))}
        </div>

        {isAuthenticated && (
          <>
            <div className="px-4 py-2 border-t border-border mt-4">
              <h3 className="text-xs font-bold text-muted uppercase tracking-wider px-4 py-2">Library</h3>
              <div className="space-y-2">
                {libraryItems.map((item) => (
                  <NavLink key={item.path} item={item} />
                ))}
              </div>
            </div>

            <div className="px-4 py-2 border-t border-border mt-4 flex-1">
              <h3 className="text-xs font-bold text-muted uppercase tracking-wider px-4 py-2">Account</h3>
              <div className="space-y-2">
                {settingsItems.map((item) => (
                  <NavLink key={item.path} item={item} />
                ))}
              </div>
            </div>
          </>
        )}
      </aside>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-16 bg-black/50 z-30 lg:hidden"
            onClick={closeMobileMenu}
          />
          <motion.div
            initial={{ x: -256 }}
            animate={{ x: 0 }}
            exit={{ x: -256 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white z-40 flex flex-col overflow-y-auto"
          >
            <div className="p-4 space-y-2">
              <h3 className="text-xs font-bold text-muted uppercase tracking-wider px-4">Menu</h3>
              {menuItems.map((item) => (
                <NavLink key={item.path} item={item} />
              ))}
            </div>

            {isAuthenticated && (
              <>
                <div className="px-4 py-2 border-t border-border mt-4">
                  <h3 className="text-xs font-bold text-muted uppercase tracking-wider px-4 py-2">Library</h3>
                  <div className="space-y-2">
                    {libraryItems.map((item) => (
                      <NavLink key={item.path} item={item} />
                    ))}
                  </div>
                </div>

                <div className="px-4 py-2 border-t border-border mt-4 flex-1">
                  <h3 className="text-xs font-bold text-muted uppercase tracking-wider px-4 py-2">Account</h3>
                  <div className="space-y-2">
                    {settingsItems.map((item) => (
                      <NavLink key={item.path} item={item} />
                    ))}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </>
  );
};

export default Sidebar;
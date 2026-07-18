import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiMenu, FiX, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { logoutUser } from '../../firebase/authService';
import { ROUTES } from '../../constants';
import toast from 'react-hot-toast';

const Navbar = () => {
  const location = useLocation();
  const { user, isAuthenticated } = useAuth();
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    const result = await logoutUser();
    if (result.success) {
      toast.success('Logged out successfully');
      closeMobileMenu();
      setDropdownOpen(false);
    } else {
      toast.error('Failed to logout');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-border shadow-soft z-40">
      <div className="container h-full flex items-center justify-between">
        {/* Logo */}
        <Link to={ROUTES.HOME} className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">V</span>
          </div>
          <span className="font-bold text-lg text-text hidden sm:inline group-hover:text-primary transition-smooth">Vybe</span>
        </Link>

        {/* Search Bar - Desktop */}
        {isAuthenticated && (
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search songs, artists, albums..."
                className="input-field pl-10"
              />
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
            </div>
          </div>
        )}

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search Icon - Mobile */}
          {isAuthenticated && (
            <button className="md:hidden btn-icon text-text">
              <FiSearch size={20} />
            </button>
          )}

          {/* Auth Buttons */}
          {!isAuthenticated ? (
            <div className="hidden sm:flex gap-2">
              <Link to={ROUTES.LOGIN} className="btn-secondary text-sm">
                Login
              </Link>
              <Link to={ROUTES.REGISTER} className="btn-primary text-sm">
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="btn-icon text-text hover:bg-surface"
              >
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <FiUser size={20} />
                )}
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-soft-lg border border-border overflow-hidden z-50">
                  <div className="px-4 py-3 border-b border-border">
                    <p className="font-semibold text-sm text-text">{user?.displayName || 'User'}</p>
                    <p className="text-xs text-muted">{user?.email}</p>
                  </div>
                  <Link
                    to={ROUTES.PROFILE}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-surface transition-smooth text-sm text-text"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <FiUser size={16} />
                    Profile
                  </Link>
                  <Link
                    to={ROUTES.SETTINGS}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-surface transition-smooth text-sm text-text"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <FiSettings size={16} />
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-surface transition-smooth text-sm text-danger border-t border-border"
                  >
                    <FiLogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden btn-icon text-text"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
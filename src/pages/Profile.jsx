import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">My Profile</h1>
        <p className="text-muted">Manage your account information</p>
      </div>

      {/* Profile Card */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary to-secondary">
            {user?.photoURL ? (
              <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white text-3xl font-bold">
                {user?.displayName?.charAt(0).toUpperCase() || 'U'}
              </div>
            )}
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-text mb-4">{user?.displayName || 'User'}</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted">
                <FiMail size={18} />
                <span>{user?.email}</span>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <FiUser size={18} />
                <span>Free Member</span>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <FiPhone size={18} />
                <span>Not provided</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Edit Profile */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card">
        <h3 className="text-xl font-bold text-text mb-6">Edit Profile</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text mb-2">Display Name</label>
            <input type="text" defaultValue={user?.displayName} className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-medium text-text mb-2">Email</label>
            <input type="email" defaultValue={user?.email} className="input-field" disabled />
          </div>
          <button type="submit" className="btn-primary w-full">
            Save Changes
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Profile;
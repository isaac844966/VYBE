import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBell, FiLock, FiVolume2, FiMoon } from 'react-icons/fi';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: false,
    darkMode: false,
    volume: 80,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleVolumeChange = (e) => {
    setSettings((prev) => ({ ...prev, volume: parseInt(e.target.value) }));
  };

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">Settings</h1>
        <p className="text-muted">Customize your Vybe experience</p>
      </div>

      {/* Notifications */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card">
        <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
          <FiBell className="text-primary" />
          Notifications
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-text">Push Notifications</p>
              <p className="text-sm text-muted">Receive push notifications</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={() => handleToggle('notifications')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-border peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-text">Email Updates</p>
              <p className="text-sm text-muted">Receive email updates about new releases</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.emailUpdates}
                onChange={() => handleToggle('emailUpdates')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-border peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </motion.div>

      {/* Playback */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card">
        <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
          <FiVolume2 className="text-primary" />
          Playback
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text mb-2">Default Volume: {settings.volume}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={settings.volume}
              onChange={handleVolumeChange}
              className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
        </div>
      </motion.div>

      {/* Privacy & Security */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card">
        <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
          <FiLock className="text-primary" />
          Privacy & Security
        </h3>
        <div className="space-y-4">
          <button className="w-full px-4 py-3 rounded-lg border border-border text-text hover:bg-surface transition-smooth text-left">
            Change Password
          </button>
          <button className="w-full px-4 py-3 rounded-lg border border-border text-text hover:bg-surface transition-smooth text-left">
            Connected Devices
          </button>
          <button className="w-full px-4 py-3 rounded-lg border border-border text-danger hover:bg-red-50 transition-smooth text-left">
            Sign out all devices
          </button>
        </div>
      </motion.div>

      {/* Save Button */}
      <button className="btn-primary w-full">Save Settings</button>
    </div>
  );
};

export default Settings;
import React, { useState } from 'react';
import { MOCK_PLAYLISTS } from '../../constants/mockData';
import { motion } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';

const Playlists = () => {
  const [playlists] = useState(MOCK_PLAYLISTS);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">Playlists</h1>
        <p className="text-muted">Explore curated playlists</p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {playlists.map((playlist) => (
          <motion.div
            key={playlist.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card group cursor-pointer"
          >
            <div className="relative mb-4 rounded-lg overflow-hidden aspect-square bg-surface">
              <img
                src={playlist.image}
                alt={playlist.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-smooth">
                <div className="btn-icon bg-primary text-white opacity-0 group-hover:opacity-100 transition-smooth">
                  <FiPlay size={24} className="ml-1" />
                </div>
              </button>
            </div>
            <h3 className="font-semibold text-text">{playlist.name}</h3>
            <p className="text-sm text-muted line-clamp-2">{playlist.description}</p>
            <p className="text-xs text-muted mt-2">{playlist.songs} songs • {playlist.followers.toLocaleString()} followers</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Playlists;
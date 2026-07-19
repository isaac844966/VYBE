import React, { useState, useEffect } from 'react';
import { useFavorites } from '../../hooks';
import { motion } from 'framer-motion';
import { FiHeart, FiPlay } from 'react-icons/fi';
import { usePlayer } from '../../context/PlayerContext';

const Favorites = () => {
  const { favorites } = useFavorites();
  const { play } = usePlayer();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-2 flex items-center gap-2">
          <FiHeart className="text-danger" size={32} />
          Liked Songs
        </h1>
        <p className="text-muted">{favorites.length} songs in your library</p>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted text-lg">You haven't liked any songs yet</p>
        </div>
      ) : (
        <div className="space-y-2">
          {favorites.map((song, index) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="card p-4 flex items-center gap-4 group cursor-pointer hover:bg-surface"
              onClick={() => play(song, favorites)}
            >
              <span className="text-muted font-semibold w-8 text-right">{index + 1}</span>
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-surface">
                <img src={song.image} alt={song.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-text">{song.title}</p>
                <p className="text-sm text-muted">{song.artist}</p>
              </div>
              <button className="btn-icon opacity-0 group-hover:opacity-100 transition-smooth text-danger">
                <FiHeart size={18} fill="currentColor" />
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
import React, { useState, useEffect } from 'react';
import { useRecentlyPlayed } from '../../hooks';
import { motion } from 'framer-motion';
import { FiClock, FiPlay } from 'react-icons/fi';
import { usePlayer } from '../../context/PlayerContext';
import { formatDuration } from '../../utils/helpers';

const RecentlyPlayed = () => {
  const { recentlyPlayed } = useRecentlyPlayed();
  const { play } = usePlayer();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-2 flex items-center gap-2">
          <FiClock className="text-primary" size={32} />
          Recently Played
        </h1>
        <p className="text-muted">{recentlyPlayed.length} songs in your history</p>
      </div>

      {recentlyPlayed.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted text-lg">No songs played yet</p>
        </div>
      ) : (
        <div className="space-y-2">
          {recentlyPlayed.map((song, index) => (
            <motion.div
              key={`${song.id}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="card p-4 flex items-center gap-4 group cursor-pointer hover:bg-surface"
              onClick={() => play(song, recentlyPlayed)}
            >
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-surface">
                <img src={song.image} alt={song.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-text">{song.title}</p>
                <p className="text-sm text-muted">{song.artist}</p>
              </div>
              <span className="text-sm text-muted">{formatDuration(song.duration)}</span>
              <button className="btn-icon opacity-0 group-hover:opacity-100 transition-smooth">
                <FiPlay size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentlyPlayed;
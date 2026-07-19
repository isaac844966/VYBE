import React, { useState } from 'react';
import { MOCK_ALBUMS } from '../../constants/mockData';
import { motion } from 'framer-motion';

const Albums = () => {
  const [albums] = useState(MOCK_ALBUMS);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">Albums</h1>
        <p className="text-muted">Explore all albums</p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {albums.map((album) => (
          <motion.div
            key={album.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card group cursor-pointer"
          >
            <div className="relative mb-4 rounded-lg overflow-hidden aspect-square bg-surface">
              <img
                src={album.image}
                alt={album.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
              />
            </div>
            <h3 className="font-semibold text-text truncate">{album.title}</h3>
            <p className="text-sm text-muted truncate">{album.artist}</p>
            <p className="text-xs text-muted mt-2">{album.year}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Albums;
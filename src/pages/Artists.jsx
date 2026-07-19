import React, { useState } from 'react';
import { MOCK_ARTISTS } from '../../constants/mockData';
import { motion } from 'framer-motion';

const Artists = () => {
  const [artists] = useState(MOCK_ARTISTS);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">Artists</h1>
        <p className="text-muted">Explore top artists</p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {artists.map((artist) => (
          <motion.div
            key={artist.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card text-center group cursor-pointer"
          >
            <div className="relative mb-4 rounded-full overflow-hidden aspect-square bg-surface">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
              />
            </div>
            <h3 className="font-semibold text-text">{artist.name}</h3>
            <p className="text-sm text-muted">{artist.followers.toLocaleString()} followers</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Artists;
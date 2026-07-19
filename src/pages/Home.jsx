import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiHeart, FiShare2, FiMusic, FiTrendingUp } from 'react-icons/fi';
import { MOCK_SONGS, MOCK_ALBUMS, MOCK_PLAYLISTS } from '../../constants/mockData';
import { usePlayer } from '../../context/PlayerContext';

const Home = () => {
  const { play } = usePlayer();
  const [featured, setFeatured] = useState([]);
  const [recentAlbums, setRecentAlbums] = useState([]);

  useEffect(() => {
    setFeatured(MOCK_SONGS.slice(0, 3));
    setRecentAlbums(MOCK_ALBUMS.slice(0, 6));
  }, []);

  const handlePlaySong = (song) => {
    play(song, MOCK_SONGS);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-8 md:p-12 text-white shadow-soft-lg"
      >
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Your Music</h1>
          <p className="text-lg opacity-90 mb-6">
            Discover new songs, artists, and playlists curated just for you.
          </p>
          <button className="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-smooth inline-flex items-center gap-2">
            <FiPlay size={20} />
            Start Listening
          </button>
        </div>
      </motion.div>

      {/* Featured Songs */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-text mb-6 flex items-center gap-2">
          <FiTrendingUp className="text-primary" />
          Featured Now
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {featured.map((song) => (
            <motion.div
              key={song.id}
              variants={itemVariants}
              className="card group cursor-pointer"
              onClick={() => handlePlaySong(song)}
            >
              <div className="relative mb-4 rounded-lg overflow-hidden aspect-square bg-surface">
                <img
                  src={song.image}
                  alt={song.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-300"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-smooth">
                  <div className="btn-icon bg-primary text-white opacity-0 group-hover:opacity-100 transition-smooth">
                    <FiPlay size={24} className="ml-1" />
                  </div>
                </button>
              </div>
              <h3 className="font-semibold text-text truncate">{song.title}</h3>
              <p className="text-sm text-muted truncate">{song.artist}</p>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
                <button className="flex-1 text-sm text-primary hover:text-secondary transition-smooth font-medium">
                  {song.likes.toLocaleString()}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Recent Albums */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-text mb-6 flex items-center gap-2">
          <FiMusic className="text-primary" />
          Recently Popular
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {recentAlbums.map((album) => (
            <motion.div key={album.id} variants={itemVariants} className="card group cursor-pointer">
              <div className="relative mb-4 rounded-lg overflow-hidden aspect-square bg-surface">
                <img
                  src={album.image}
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-300"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-smooth">
                  <div className="btn-icon bg-primary text-white opacity-0 group-hover:opacity-100 transition-smooth">
                    <FiPlay size={24} className="ml-1" />
                  </div>
                </button>
              </div>
              <h3 className="font-semibold text-text truncate">{album.title}</h3>
              <p className="text-sm text-muted truncate">{album.artist}</p>
              <p className="text-xs text-muted mt-1">{album.songs} songs • {album.year}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
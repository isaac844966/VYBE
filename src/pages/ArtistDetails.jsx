import React from 'react';
import { useParams } from 'react-router-dom';
import { MOCK_ARTISTS, MOCK_SONGS, MOCK_ALBUMS } from '../../constants/mockData';
import { motion } from 'framer-motion';
import { FiPlay, FiHeart, FiShare2 } from 'react-icons/fi';
import { usePlayer } from '../../context/PlayerContext';

const ArtistDetails = () => {
  const { id } = useParams();
  const { play } = usePlayer();
  const artist = MOCK_ARTISTS.find((a) => a.id === parseInt(id)) || MOCK_ARTISTS[0];
  const topSongs = MOCK_SONGS.slice(0, 5);
  const albums = MOCK_ALBUMS.slice(0, 4);

  return (
    <div className="space-y-8">
      {/* Artist Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-8 md:p-16 text-white"
      >
        <div className="flex flex-col md:flex-row gap-8 items-end">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0 shadow-soft-lg">
            <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <p className="text-white/70 uppercase tracking-wider mb-2">Artist</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{artist.name}</h1>
            <p className="text-lg text-white/80 mb-6">{artist.followers.toLocaleString()} followers</p>
            <div className="flex gap-4">
              <button className="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-smooth inline-flex items-center gap-2">
                <FiPlay size={18} />
                Play
              </button>
              <button className="btn-secondary text-sm flex items-center gap-2">
                <FiHeart size={18} />
                Follow
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Top Songs */}
      <div>
        <h2 className="text-2xl font-bold text-text mb-4">Top Songs</h2>
        <div className="space-y-2">
          {topSongs.map((song, index) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="card p-4 flex items-center gap-4 group cursor-pointer hover:bg-surface"
              onClick={() => play(song, topSongs)}
            >
              <span className="text-muted font-semibold w-8 text-right">{index + 1}</span>
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-surface">
                <img src={song.image} alt={song.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-text">{song.title}</p>
                <p className="text-sm text-muted">{song.album}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Albums */}
      <div>
        <h2 className="text-2xl font-bold text-text mb-4">Albums</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {albums.map((album) => (
            <motion.div key={album.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card group cursor-pointer">
              <div className="relative mb-4 rounded-lg overflow-hidden aspect-square bg-surface">
                <img src={album.image} alt={album.title} className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />
              </div>
              <h3 className="font-semibold text-text truncate">{album.title}</h3>
              <p className="text-sm text-muted">{album.year}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ArtistDetails;
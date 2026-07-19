import React from 'react';
import { useParams } from 'react-router-dom';
import { MOCK_PLAYLISTS, MOCK_SONGS } from '../../constants/mockData';
import { motion } from 'framer-motion';
import { FiPlay, FiHeart, FiShare2 } from 'react-icons/fi';
import { usePlayer } from '../../context/PlayerContext';

const PlaylistDetails = () => {
  const { id } = useParams();
  const { play } = usePlayer();
  const playlist = MOCK_PLAYLISTS.find((p) => p.id === parseInt(id)) || MOCK_PLAYLISTS[0];
  const songs = MOCK_SONGS;

  return (
    <div className="space-y-8">
      {/* Playlist Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-surface to-white rounded-2xl p-8 flex flex-col md:flex-row gap-8"
      >
        <div className="w-full md:w-64 h-64 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary to-secondary">
          <img src={playlist.image} alt={playlist.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 flex flex-col justify-end">
          <p className="text-muted text-sm uppercase tracking-wider mb-2">Playlist</p>
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">{playlist.name}</h1>
          <p className="text-lg text-muted mb-2">{playlist.description}</p>
          <p className="text-muted text-sm mb-6">{playlist.songs} songs • {playlist.followers.toLocaleString()} followers</p>
          <div className="flex gap-4">
            <button className="btn-primary flex items-center gap-2">
              <FiPlay size={18} />
              Play Playlist
            </button>
            <button className="btn-secondary flex items-center gap-2">
              <FiHeart size={18} />
              Like
            </button>
            <button className="btn-secondary flex items-center gap-2">
              <FiShare2 size={18} />
              Share
            </button>
          </div>
        </div>
      </motion.div>

      {/* Songs List */}
      <div>
        <h2 className="text-2xl font-bold text-text mb-4">{songs.length} Songs</h2>
        <div className="space-y-2">
          {songs.map((song, index) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="card p-4 flex items-center gap-4 group cursor-pointer hover:bg-surface"
              onClick={() => play(song, songs)}
            >
              <span className="text-muted font-semibold w-8 text-right">{index + 1}</span>
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-surface">
                <img src={song.image} alt={song.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-text">{song.title}</p>
                <p className="text-sm text-muted">{song.artist}</p>
              </div>
              <button className="btn-icon opacity-0 group-hover:opacity-100 transition-smooth">
                <FiHeart size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetails;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter } from 'react-icons/fi';
import { GENRES } from '../../constants';
import { MOCK_SONGS } from '../../constants/mockData';
import { debounce } from '../../utils/helpers';

const Discover = () => {
  const [selectedGenre, setSelectedGenre] = useState('Pop');
  const [songs, setSongs] = useState(MOCK_SONGS);
  const [filteredSongs, setFilteredSongs] = useState(MOCK_SONGS);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = debounce((query) => {
    if (!query.trim()) {
      setFilteredSongs(songs);
      return;
    }
    const filtered = songs.filter(
      (song) =>
        song.title.toLowerCase().includes(query.toLowerCase()) ||
        song.artist.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSongs(filtered);
  }, 300);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">Discover</h1>
        <p className="text-muted">Explore new music and trending artists</p>
      </div>

      {/* Search & Filter */}
      <div className="flex gap-4 flex-col sm:flex-row">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search songs, artists..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="input-field pl-10"
          />
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
        </div>
        <button className="btn-secondary flex items-center gap-2">
          <FiFilter size={18} />
          Filter
        </button>
      </div>

      {/* Genre Filter */}
      <div>
        <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">Genres</h3>
        <div className="flex flex-wrap gap-2">
          {GENRES.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 rounded-full transition-smooth ${
                selectedGenre === genre
                  ? 'bg-primary text-white'
                  : 'bg-surface text-text hover:bg-border'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Songs Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {filteredSongs.map((song) => (
          <motion.div
            key={song.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card group cursor-pointer"
          >
            <div className="relative mb-4 rounded-lg overflow-hidden aspect-square bg-surface">
              <img
                src={song.image}
                alt={song.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
              />
            </div>
            <h3 className="font-semibold text-text truncate">{song.title}</h3>
            <p className="text-sm text-muted truncate">{song.artist}</p>
          </motion.div>
        ))}
      </motion.div>

      {filteredSongs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted text-lg">No songs found</p>
        </div>
      )}
    </div>
  );
};

export default Discover;
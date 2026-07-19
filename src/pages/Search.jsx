import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MOCK_SONGS, MOCK_ARTISTS, MOCK_ALBUMS, MOCK_PLAYLISTS } from '../../constants/mockData';
import { motion } from 'framer-motion';
import { FiMusic, FiUsers, FiDisc3, FiList } from 'react-icons/fi';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState({ songs: [], artists: [], albums: [], playlists: [] });

  useEffect(() => {
    if (!query.trim()) {
      setResults({ songs: [], artists: [], albums: [], playlists: [] });
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    setResults({
      songs: MOCK_SONGS.filter((s) => s.title.toLowerCase().includes(lowercaseQuery) || s.artist.toLowerCase().includes(lowercaseQuery)),
      artists: MOCK_ARTISTS.filter((a) => a.name.toLowerCase().includes(lowercaseQuery)),
      albums: MOCK_ALBUMS.filter((a) => a.title.toLowerCase().includes(lowercaseQuery) || a.artist.toLowerCase().includes(lowercaseQuery)),
      playlists: MOCK_PLAYLISTS.filter((p) => p.name.toLowerCase().includes(lowercaseQuery)),
    });
  }, [query]);

  const ResultSection = ({ title, icon: Icon, items, type }) => {
    if (items.length === 0) return null;

    return (
      <div className="space-y-4 mb-8">
        <h2 className="text-xl font-bold text-text flex items-center gap-2">
          <Icon className="text-primary" />
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card cursor-pointer"
            >
              {item.image && (
                <div className="relative mb-4 rounded-lg overflow-hidden aspect-square bg-surface">
                  <img src={item.image} alt={item.title || item.name} className="w-full h-full object-cover" />
                </div>
              )}
              <h3 className="font-semibold text-text truncate">{item.title || item.name}</h3>
              <p className="text-sm text-muted truncate">{item.artist || item.description || 'View details'}</p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">Search Results</h1>
        <p className="text-muted">Results for "{query}"</p>
      </div>

      {Object.values(results).every((arr) => arr.length === 0) ? (
        <div className="text-center py-12">
          <p className="text-muted text-lg">No results found for "{query}"</p>
        </div>
      ) : (
        <>
          <ResultSection title="Songs" icon={FiMusic} items={results.songs} type="song" />
          <ResultSection title="Artists" icon={FiUsers} items={results.artists} type="artist" />
          <ResultSection title="Albums" icon={FiDisc3} items={results.albums} type="album" />
          <ResultSection title="Playlists" icon={FiList} items={results.playlists} type="playlist" />
        </>
      )}
    </div>
  );
};

export default Search;
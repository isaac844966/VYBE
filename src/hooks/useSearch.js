import { useState, useCallback, useEffect } from 'react';
import { debounce } from '../utils/helpers';

export const useSearch = (initialQuery = '') => {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  const addRecentSearch = useCallback((searchTerm) => {
    setRecentSearches((prev) => {
      const filtered = prev.filter((s) => s !== searchTerm);
      const updated = [searchTerm, ...filtered].slice(0, 10);
      localStorage.setItem('recentSearches', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const clearRecentSearches = useCallback(() => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  }, []);

  const search = useCallback(
    debounce(async (searchQuery) => {
      if (!searchQuery.trim()) {
        setResults([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        // API call would go here
        addRecentSearch(searchQuery);
        setResults([]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }, 300),
    [addRecentSearch]
  );

  return {
    query,
    setQuery,
    results,
    loading,
    error,
    recentSearches,
    search,
    addRecentSearch,
    clearRecentSearches,
  };
};
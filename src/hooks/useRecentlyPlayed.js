import { useState, useEffect, useCallback } from 'react';

export const useRecentlyPlayed = () => {
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('recentlyPlayed');
    if (saved) {
      setRecentlyPlayed(JSON.parse(saved));
    }
  }, []);

  const addToRecentlyPlayed = useCallback((item) => {
    setRecentlyPlayed((prev) => {
      const filtered = prev.filter((i) => i.id !== item.id);
      const updated = [{ ...item, playedAt: new Date().toISOString() }, ...filtered].slice(0, 50);
      localStorage.setItem('recentlyPlayed', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const clearRecentlyPlayed = useCallback(() => {
    setRecentlyPlayed([]);
    localStorage.removeItem('recentlyPlayed');
  }, []);

  return {
    recentlyPlayed,
    addToRecentlyPlayed,
    clearRecentlyPlayed,
  };
};
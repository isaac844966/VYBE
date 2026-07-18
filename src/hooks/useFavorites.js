import { useState, useEffect, useCallback } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
    setLoading(false);
  }, []);

  const addFavorite = useCallback((item) => {
    setFavorites((prev) => {
      const updated = [...prev, item];
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const removeFavorite = useCallback((itemId) => {
    setFavorites((prev) => {
      const updated = prev.filter((item) => item.id !== itemId);
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const isFavorite = useCallback((itemId) => {
    return favorites.some((item) => item.id === itemId);
  }, [favorites]);

  const toggleFavorite = useCallback((item) => {
    if (isFavorite(item.id)) {
      removeFavorite(item.id);
    } else {
      addFavorite(item);
    }
  }, [isFavorite, removeFavorite, addFavorite]);

  return {
    favorites,
    loading,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
  };
};
import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { usePlayer } from '../context/PlayerContext';

export const useFavoritesHook = () => {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
};

export const useRecentlyPlayed = () => {
  const { recentlyPlayed } = usePlayer();
  return { recentlyPlayed };
};

// Wrapper for use in components
export const useFavorites = () => {
  const { favorites, addFavorite, removeFavorite } = useFavoritesHook();
  return { favorites, addFavorite, removeFavorite };
};

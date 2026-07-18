import React, { createContext, useContext, useState, useCallback } from 'react';

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [queue, setQueue] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [volume, setVolume] = useState(1);
  const [repeat, setRepeat] = useState('off'); // off, one, all
  const [shuffle, setShuffle] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const play = useCallback((track, trackQueue = []) => {
    setCurrentTrack(track);
    if (trackQueue.length > 0) {
      setQueue(trackQueue);
      const index = trackQueue.findIndex((t) => t.id === track.id);
      setCurrentIndex(index >= 0 ? index : 0);
    }
    setIsPlaying(true);
  }, []);

  const pause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const resume = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const next = useCallback(() => {
    if (queue.length === 0) return;
    const newIndex = (currentIndex + 1) % queue.length;
    setCurrentIndex(newIndex);
    setCurrentTrack(queue[newIndex]);
    setCurrentTime(0);
  }, [queue, currentIndex]);

  const previous = useCallback(() => {
    if (queue.length === 0) return;
    const newIndex = currentIndex === 0 ? queue.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setCurrentTrack(queue[newIndex]);
    setCurrentTime(0);
  }, [queue, currentIndex]);

  const seek = useCallback((time) => {
    setCurrentTime(time);
  }, []);

  const setVolumeLevel = useCallback((level) => {
    setVolume(Math.max(0, Math.min(1, level)));
  }, []);

  const toggleRepeat = useCallback(() => {
    setRepeat((prev) => (prev === 'off' ? 'all' : prev === 'all' ? 'one' : 'off'));
  }, []);

  const toggleShuffle = useCallback(() => {
    setShuffle((prev) => !prev);
  }, []);

  const toggleFavorite = useCallback(() => {
    setIsFavorite((prev) => !prev);
  }, []);

  const value = {
    currentTrack,
    isPlaying,
    queue,
    currentIndex,
    volume,
    repeat,
    shuffle,
    currentTime,
    duration,
    isFavorite,
    play,
    pause,
    resume,
    togglePlayPause,
    next,
    previous,
    seek,
    setVolumeLevel,
    setDuration,
    setCurrentTime,
    toggleRepeat,
    toggleShuffle,
    toggleFavorite,
  };

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within PlayerProvider');
  }
  return context;
};
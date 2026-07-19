import React, { useEffect, useRef } from 'react';
import { usePlayer } from '../../context/PlayerContext';
import {
  FiPlay,
  FiPause,
  FiSkipBack,
  FiSkipForward,
  FiVolume2,
  FiRepeat,
  FiShuffle,
  FiHeart,
} from 'react-icons/fi';
import { motion } from 'framer-motion';

const Player = () => {
  const {
    currentTrack,
    isPlaying,
    volume,
    repeat,
    shuffle,
    currentTime,
    duration,
    isFavorite,
    togglePlayPause,
    next,
    previous,
    seek,
    setVolumeLevel,
    setCurrentTime,
    setDuration,
    toggleRepeat,
    toggleShuffle,
    toggleFavorite,
  } = usePlayer();

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = currentTrack?.url || '';
  }, [currentTrack]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
    setCurrentTime(newTime);
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!currentTrack) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border h-20 flex items-center justify-center text-muted">
        <p>Select a song to start playing</p>
      </div>
    );
  }

  return (
    <>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={next}
      />

      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-soft-lg z-50"
      >
        {/* Progress Bar */}
        <div className="h-1 bg-border">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all"
            style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
          />
        </div>

        <div className="px-4 py-3">
          <div className="flex items-center gap-4">
            {/* Track Info */}
            <div className="w-48 flex items-center gap-3 flex-shrink-0">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-surface flex-shrink-0">
                <img
                  src={currentTrack.image}
                  alt={currentTrack.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-sm text-text truncate">{currentTrack.title}</p>
                <p className="text-xs text-muted truncate">{currentTrack.artist}</p>
              </div>
            </div>

            {/* Progress */}
            <div className="flex-1 flex items-center gap-3">
              <span className="text-xs text-muted w-8 text-right">{formatTime(currentTime)}</span>
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="flex-1 h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <span className="text-xs text-muted w-8">{formatTime(duration)}</span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 justify-center w-64 flex-shrink-0">
              <button
                onClick={toggleShuffle}
                className={`btn-icon transition-smooth ${
                  shuffle ? 'text-primary' : 'text-muted hover:text-text'
                }`}
              >
                <FiShuffle size={18} />
              </button>

              <button onClick={previous} className="btn-icon text-text hover:text-primary">
                <FiSkipBack size={20} />
              </button>

              <button
                onClick={togglePlayPause}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white hover:bg-secondary transition-smooth"
              >
                {isPlaying ? <FiPause size={20} /> : <FiPlay size={20} className="ml-1" />}
              </button>

              <button onClick={next} className="btn-icon text-text hover:text-primary">
                <FiSkipForward size={20} />
              </button>

              <button
                onClick={toggleRepeat}
                className={`btn-icon transition-smooth ${
                  repeat !== 'off' ? 'text-primary' : 'text-muted hover:text-text'
                }`}
              >
                <FiRepeat size={18} />
              </button>
            </div>

            {/* Volume & Favorite */}
            <div className="w-48 flex items-center gap-4 justify-end flex-shrink-0">
              <button
                onClick={toggleFavorite}
                className={`btn-icon transition-smooth ${
                  isFavorite ? 'text-danger' : 'text-muted hover:text-text'
                }`}
              >
                <FiHeart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
              </button>

              <div className="flex items-center gap-2">
                <FiVolume2 size={18} className="text-muted flex-shrink-0" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => setVolumeLevel(parseFloat(e.target.value))}
                  className="w-20 h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Player Padding */}
      <div className="h-24" />
    </>
  );
};

export default Player;
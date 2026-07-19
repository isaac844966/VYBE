// Constants
export const ROUTES = {
  SPLASH: '/splash',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  HOME: '/',
  DISCOVER: '/discover',
  BROWSE: '/browse',
  SEARCH: '/search',
  ALBUMS: '/albums',
  ALBUM_DETAILS: '/albums/:id',
  ARTISTS: '/artists',
  ARTIST_DETAILS: '/artists/:id',
  PLAYLISTS: '/playlists',
  PLAYLIST_DETAILS: '/playlists/:id',
  FAVORITES: '/favorites',
  RECENTLY_PLAYED: '/recently-played',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  NOTIFICATIONS: '/notifications',
  PREMIUM: '/premium',
  HELP: '/help',
  LANDING: '/',
  NOT_FOUND: '/404',
};

export const GENRES = [
  'Pop',
  'Rock',
  'Hip-Hop',
  'Jazz',
  'Classical',
  'Electronic',
  'R&B',
  'Country',
  'Latin',
  'Indie',
];

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.deezer.com';

export const DEEZER_ENDPOINTS = {
  SEARCH: '/search',
  ARTIST: '/artist',
  ALBUM: '/album',
  TRACK: '/track',
  PLAYLIST: '/playlist',
  GENRE: '/genre',
  CHART: '/chart',
};

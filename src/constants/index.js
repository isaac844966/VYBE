export const ROUTES = {
  HOME: '/',
  SPLASH: '/splash',
  LANDING: '/landing',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  DISCOVER: '/discover',
  BROWSE: '/browse',
  SEARCH: '/search',
  ALBUMS: '/albums',
  ALBUM_DETAILS: '/albums/:id',
  ARTISTS: '/artists',
  ARTIST_DETAILS: '/artists/:id',
  SONGS: '/songs',
  SONG_DETAILS: '/songs/:id',
  PLAYLISTS: '/playlists',
  PLAYLIST_DETAILS: '/playlists/:id',
  FAVORITES: '/favorites',
  RECENTLY_PLAYED: '/recently-played',
  QUEUE: '/queue',
  LYRICS: '/lyrics',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  NOTIFICATIONS: '/notifications',
  PREMIUM: '/premium',
  HELP: '/help',
  NOT_FOUND: '*',
};

export const API_BASE_URL = 'https://api.deezer.com';

export const DEEZER_ENDPOINTS = {
  SEARCH: '/search',
  ARTIST: '/artist',
  ALBUM: '/album',
  PLAYLIST: '/playlist',
  TRACK: '/track',
  GENRE: '/genre',
  CHART: '/chart',
};

export const DEBOUNCE_DELAY = 300;

export const ITEMS_PER_PAGE = 20;

export const GENRES = [
  'Pop', 'Rock', 'Hip-Hop', 'R&B', 'Jazz', 'Classical',
  'Electronic', 'Country', 'Latin', 'K-Pop', 'Indie', 'Folk'
];
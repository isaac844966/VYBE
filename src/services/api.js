import axios from 'axios';
import { API_BASE_URL, DEEZER_ENDPOINTS } from '../constants';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Search
export const searchAll = async (query) => {
  try {
    const response = await api.get(DEEZER_ENDPOINTS.SEARCH, {
      params: { q: query },
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const searchTracks = async (query) => {
  try {
    const response = await api.get(DEEZER_ENDPOINTS.SEARCH, {
      params: { q: query, type: 'track' },
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const searchArtists = async (query) => {
  try {
    const response = await api.get(DEEZER_ENDPOINTS.SEARCH, {
      params: { q: query, type: 'artist' },
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const searchAlbums = async (query) => {
  try {
    const response = await api.get(DEEZER_ENDPOINTS.SEARCH, {
      params: { q: query, type: 'album' },
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const searchPlaylists = async (query) => {
  try {
    const response = await api.get(DEEZER_ENDPOINTS.SEARCH, {
      params: { q: query, type: 'playlist' },
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Artist
export const getArtist = async (artistId) => {
  try {
    const response = await api.get(`${DEEZER_ENDPOINTS.ARTIST}/${artistId}`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getArtistTracks = async (artistId) => {
  try {
    const response = await api.get(`${DEEZER_ENDPOINTS.ARTIST}/${artistId}/top`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getArtistAlbums = async (artistId) => {
  try {
    const response = await api.get(`${DEEZER_ENDPOINTS.ARTIST}/${artistId}/albums`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Album
export const getAlbum = async (albumId) => {
  try {
    const response = await api.get(`${DEEZER_ENDPOINTS.ALBUM}/${albumId}`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Playlist
export const getPlaylist = async (playlistId) => {
  try {
    const response = await api.get(`${DEEZER_ENDPOINTS.PLAYLIST}/${playlistId}`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Track
export const getTrack = async (trackId) => {
  try {
    const response = await api.get(`${DEEZER_ENDPOINTS.TRACK}/${trackId}`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Genre
export const getGenres = async () => {
  try {
    const response = await api.get(`${DEEZER_ENDPOINTS.GENRE}`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Chart
export const getCharts = async () => {
  try {
    const response = await api.get(DEEZER_ENDPOINTS.CHART);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export default api;
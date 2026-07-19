import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { MainLayout } from '../components/layout';
import ProtectedRoute from './ProtectedRoute';
import { ROUTES } from '../constants';

// Pages - Auth
const Splash = lazy(() => import('../pages/Splash'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));

// Pages - Main (Lazy loaded)
const Home = lazy(() => import('../pages/Home'));
const Discover = lazy(() => import('../pages/Discover'));
const Browse = lazy(() => import('../pages/Browse'));
const Search = lazy(() => import('../pages/Search'));
const Albums = lazy(() => import('../pages/Albums'));
const AlbumDetails = lazy(() => import('../pages/AlbumDetails'));
const Artists = lazy(() => import('../pages/Artists'));
const ArtistDetails = lazy(() => import('../pages/ArtistDetails'));
const Playlists = lazy(() => import('../pages/Playlists'));
const PlaylistDetails = lazy(() => import('../pages/PlaylistDetails'));
const Favorites = lazy(() => import('../pages/Favorites'));
const RecentlyPlayed = lazy(() => import('../pages/RecentlyPlayed'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Premium = lazy(() => import('../pages/Premium'));
const Help = lazy(() => import('../pages/Help'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Loading Skeleton
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Public Routes */}
          <Route path={ROUTES.SPLASH} element={<Splash />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />

          {/* Protected Routes */}
          <Route
            path={ROUTES.HOME}
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Home />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.DISCOVER}
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Discover />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.BROWSE}
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Browse />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.SEARCH}
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Search />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.ALBUMS}
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Albums />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.ALBUM_DETAILS}
            element={
              <ProtectedRoute>
                <MainLayout>
                  <AlbumDetails />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.ARTISTS}
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Artists />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.ARTIST_DETAILS}
            element={
              <ProtectedRoute>
                <MainLayout>
                  <ArtistDetails />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.PLAYLISTS}
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Playlists />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.PLAYLIST_DETAILS}
            element={
              <ProtectedRoute>
                <MainLayout>
                  <PlaylistDetails />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.FAVORITES}
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Favorites />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.RECENTLY_PLAYED}
            element={
              <ProtectedRoute>
                <MainLayout>
                  <RecentlyPlayed />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.PROFILE}
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Profile />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.SETTINGS}
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Settings />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.PREMIUM}
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Premium />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.HELP}
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Help />
                </MainLayout>
              </ProtectedRoute>
            }
          />

          {/* 404 */}
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
          <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} replace />} />
        </Routes>
      </Suspense>

      {/* Toast Notifications */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#fff',
            color: '#111827',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
            borderRadius: '12px',
            border: '1px solid #E5E7EB',
          },
          success: {
            style: {
              background: '#F0FDF4',
              color: '#166534',
              borderColor: '#BBEF63',
            },
            iconTheme: {
              primary: '#10B981',
              secondary: '#F0FDF4',
            },
          },
          error: {
            style: {
              background: '#FEF2F2',
              color: '#991B1B',
              borderColor: '#FECACA',
            },
            iconTheme: {
              primary: '#EF4444',
              secondary: '#FEF2F2',
            },
          },
        }}
      />
    </Router>
  );
};

export default AppRoutes;
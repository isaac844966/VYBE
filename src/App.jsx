import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { PlayerProvider } from './context/PlayerContext';
import { ThemeProvider } from './context/ThemeContext';
import AppRoutes from './routes';

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <PlayerProvider>
          <AppRoutes />
        </PlayerProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
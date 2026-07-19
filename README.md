# Vybe - Music Streaming Platform

A modern, full-featured music streaming platform built with React, Firebase, and Tailwind CSS.

## Features

- 🎵 **Music Streaming** - Stream millions of songs with high-quality audio
- 🎨 **Modern UI** - Beautiful, responsive design with smooth animations
- 🔐 **User Authentication** - Secure login/registration with Firebase
- 💝 **Favorites** - Like and save your favorite songs
- 📱 **Mobile Responsive** - Works seamlessly on all devices
- 🎼 **Playlists** - Create and manage custom playlists
- 🎤 **Artist Profiles** - Explore artist information and discography
- 🔍 **Search** - Find songs, artists, albums, and playlists
- 🌙 **Dark Mode** - Eye-friendly dark theme support
- ⚡ **Fast & Optimized** - Lazy loading and code splitting for better performance

## Tech Stack

### Frontend
- **React** - UI library
- **React Router** - Client-side routing
- **Framer Motion** - Animations and transitions
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form management
- **Yup** - Schema validation

### Backend & Services
- **Firebase** - Authentication, Firestore database
- **Deezer API** - Music data and streaming

### Additional Libraries
- **React Icons** - Icon library
- **React Hot Toast** - Toast notifications
- **Zustand** - State management
- **Axios** - HTTP client

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- Deezer API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/isaac844966/vybe.git
cd vybe
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory
```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
REACT_APP_DEEZER_API_KEY=your_deezer_api_key
REACT_APP_API_BASE_URL=https://api.deezer.com
```

4. Start the development server
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Project Structure

```
vybe/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── MainLayout.jsx
│   │   ├── Player/
│   │   │   ├── Player.jsx
│   │   │   └── index.js
│   │   └── index.js
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── PlayerContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── FavoritesContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Discover.jsx
│   │   ├── Albums.jsx
│   │   ├── Artists.jsx
│   │   ├── Playlists.jsx
│   │   ├── Profile.jsx
│   │   ├── Settings.jsx
│   │   └── ...
│   ├── routes/
│   │   ├── index.jsx
│   │   └── ProtectedRoute.jsx
│   ├── firebase/
│   │   ├── config.js
│   │   └── authService.js
│   ├── utils/
│   │   ├── validation.js
│   │   └── helpers.js
│   ├── constants/
│   │   ├── index.js
│   │   └── mockData.js
│   ├── hooks/
│   │   └── index.js
│   ├── App.jsx
│   ├── index.js
│   ├── index.css
│   └── tailwind.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Available Routes

### Public Routes
- `/splash` - Splash screen
- `/login` - Login page
- `/register` - Registration page
- `/forgot-password` - Password recovery

### Protected Routes
- `/` - Home page
- `/discover` - Discover new music
- `/browse` - Browse all content
- `/search` - Search functionality
- `/albums` - All albums
- `/albums/:id` - Album details
- `/artists` - All artists
- `/artists/:id` - Artist details
- `/playlists` - User playlists
- `/playlists/:id` - Playlist details
- `/favorites` - Liked songs
- `/recently-played` - Recent history
- `/profile` - User profile
- `/settings` - User settings
- `/premium` - Premium subscription
- `/help` - Help & support

## Authentication

Vybe uses Firebase Authentication with support for:
- Email/Password authentication
- Google Sign-In
- Password reset functionality

## Music API Integration

The platform integrates with the Deezer API for:
- Music search and discovery
- Artist and album information
- Playlist data
- Audio streaming

## State Management

The app uses React Context API and Zustand for state management:
- **AuthContext** - User authentication state
- **PlayerContext** - Music player state
- **ThemeContext** - Theme and UI state
- **FavoritesContext** - User favorites

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@vybe.com or open an issue on GitHub.

## Roadmap

- [ ] Offline listening capability
- [ ] Podcast support
- [ ] Social features (sharing, following)
- [ ] Recommendation algorithm
- [ ] Radio stations
- [ ] Lyrics display
- [ ] Audio visualization
- [ ] Multi-language support

## Author

**Isaac Bioko** - [@isaac844966](https://github.com/isaac844966)

---

Made with ❤️ by Isaac Bioko

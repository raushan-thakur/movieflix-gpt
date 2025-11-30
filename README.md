# 🎬 MovieFlix GPT

A modern, full-stack movie browsing application with AI-powered movie recommendations, built with React and integrated with TMDB API and OpenAI GPT.

**Live Demo**: [https://movieflix-gpt-tau.vercel.app/](https://movieflix-gpt-tau.vercel.app/)

---

## ✨ Features

### 🔐 Authentication

- **Sign In / Sign Up** with Firebase Authentication
- Secure user authentication with email and password
- Form validation and error handling
- Protected routes with automatic redirects

### 🎥 Movie Browsing

- **Browse Page** with multiple movie categories:
  - Now Playing Movies
  - Popular Movies
  - Top Rated Movies
  - Upcoming Movies
- **Movie Details Page** with comprehensive information:
  - Movie poster, title, and overview
  - Release date, genres, runtime, and languages
  - Background images and trailers

### 🤖 AI-Powered Search

- **GPT Search** for intelligent movie recommendations
- Multi-language support (English, Hindi, Spanish)
- Search movies by description or mood
- Displays AI-suggested movies with TMDB integration

### 🎨 User Interface

- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Modern UI** built with Tailwind CSS
- **Video Backgrounds** - Auto-playing movie trailers
- **Smooth Navigation** with React Router
- Netflix-inspired design

---

## 🛠️ Tech Stack

### Frontend

- **React** - UI library
- **Redux Toolkit** - State management
- **React Router** - Navigation and routing
- **Tailwind CSS** - Styling

### Backend & APIs

- **Firebase Authentication** - User authentication
- **TMDB API** - Movie data and images
- **OpenAI API** - GPT-powered movie recommendations

### Tools & Libraries

- **Axios** - HTTP client
- **Firebase SDK** - Authentication and analytics

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- TMDB API key ([Get it here](https://www.themoviedb.org/settings/api))
- OpenAI API key ([Get it here](https://platform.openai.com/api-keys))
- Firebase project ([Create one here](https://console.firebase.google.com/))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/movieflix-gpt.git
   cd movieflix-gpt
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   REACT_APP_TMDB_KEY=your_tmdb_api_key_here
   REACT_APP_OPENAI_KEY=your_openai_api_key_here
   ```

4. **Configure Firebase**

   Update `src/utils/firebase.js` with your Firebase configuration:

   ```javascript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-auth-domain",
     projectId: "your-project-id",
     // ... other config
   };
   ```

5. **Run the development server**

   ```bash
   npm start
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
movieflix-gpt/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   │   ├── Body.js      # Main routing component
│   │   ├── Browse.js    # Browse page
│   │   ├── Login.js     # Authentication
│   │   ├── Header.js    # Navigation header
│   │   └── ...          # Other components
│   ├── hooks/           # Custom React hooks
│   │   ├── useNowPlayingMovies.js
│   │   ├── usePopularMovies.js
│   │   └── ...
│   ├── utils/           # Utilities and Redux slices
│   │   ├── appStore.js  # Redux store
│   │   ├── userSlice.js # User state
│   │   ├── movieSlice.js # Movie state
│   │   └── ...
│   └── App.js           # Root component
└── package.json
```

For detailed documentation of all files, see [src/README.md](./src/README.md)

---

## 🎯 Key Features Explained

### State Management

The app uses **Redux Toolkit** with four main slices:

- `userSlice` - Authentication state
- `movieSlice` - Movie data and trailers
- `gptSlice` - GPT search functionality
- `configSlice` - App configuration (language)

### Routing

- `/` - Login/Authentication page
- `/browse` - Main movie browsing page
- `/movie/:id` - Individual movie details
- `/error` - 404 error page

### Custom Hooks

- `useNowPlayingMovies` - Fetches currently playing movies
- `usePopularMovies` - Fetches popular movies
- `useTopRatedMovies` - Fetches top rated movies
- `useUpcoming` - Fetches upcoming movies
- `useMovieTrailer` - Fetches movie trailer videos
- `useFetch` - Generic API fetching hook

---

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (irreversible)

---


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👤 Author

Raushan Thakur

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for the movie database API
- [OpenAI](https://openai.com/) for GPT API
- [Firebase](https://firebase.google.com/) for authentication
- [Netflix](https://www.netflix.com/) for design inspiration

---
⭐ **Star this repo if you find it helpful!**

import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return movies.nowPlayingMovies &&  (
    <div className='bg-black'> 
    <div className='mt-0 md:-mt-48 pl-2 md:pl-8 relative z-40'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />

      <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>
      {
        /*
          MovieList - Popular
            Moviecard * N
          MovieList - Now Playing
          MovieList - Trending
          MovieList - Horror
        */
      }
    </div>
  )
}

export default SecondaryContainer
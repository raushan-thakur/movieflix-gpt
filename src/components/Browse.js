import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcoming from "../hooks/useUpcoming";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcoming();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div>
    <Header />
    {showGptSearch ? (
      <GptSearch />
    ) : (
      <>
        <MainContainer />
        <SecondaryContainer />
      </>
    )}

    {/**
     * MainContainer
     *  VIDEO background
     *  Title
     * SecondaryContainer
     *  MoviesList * N
     *    MovieCard * N
     */}
  </div>
  );
};

export default Browse;

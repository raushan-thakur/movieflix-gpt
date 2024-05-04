import React from "react";
import SearchBar from "./SearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:w-screen" src={BG_URL} alt="background-image" />
      </div>
      <div className="">
      <SearchBar />
      <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;

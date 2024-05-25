import { useEffect, useState } from "react";
import { API_OPTIONS, IMG_CDN, LOGO } from "../utils/constants";
import { Link, useNavigate, useParams } from "react-router-dom";
import MovieContent from "./MovieContent";
import { useSelector } from "react-redux";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  if (!user) {
    navigate("/");
  }

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id,
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json);
    setMovie(json);
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div>
      <div className=" w-full">
        <div className="h-[100vh] w-[100vw] top-0 absolute -z-10 overflow-hidden bg-black">
          <img
            className="w-12/12 h-screen object-cover md:w-screen mx-auto fixed brightness-[.4] scale-125  xl:scale-105 "
            src={
              IMG_CDN +
              (movie?.backdrop_path ||
                movie?.belongs_to_collection?.backdrop_path)
            }
            alt="movieInfoBG"
          />
        </div>
        <Link to={"/browse"}>
          <img className="w-44 fixed m-auto md:mx-0" src={LOGO} alt="logo" />
        </Link>
        <MovieContent info={movie} />
      </div>
    </div>
  );
};

export default MovieDetails;

import React from 'react'
import { IMG_CDN } from '../utils/constants'
import { Link } from 'react-router-dom';

const MovieCard = ({posterPath, id}) => {
  //console.log(posterPath);
  if(!posterPath) return null;
  return (
    <Link to={"/movie/" + id} key={id}>
    <div className='w-36 md:w-40 pr-4'>
      <img className='' alt='MovieCard' src={IMG_CDN + posterPath}/>
    </div>
    </Link>
  )
}

export default MovieCard
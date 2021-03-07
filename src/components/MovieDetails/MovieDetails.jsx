import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails() {

  let history = useHistory();

  const movieDetails = useSelector(store => store.movieDetails);
  const movieGenres = useSelector(store => store.movieGenres);

  const handleBackButton = () => {
    history.push('/');
  }
  
  return (
    <div className="movieDetails">
      {movieDetails.map(movie => {
        return (
          <div>
            <h1>{movie.title}</h1>
            <img src={movie.poster} alt={movie.title}/>
            <p>{movie.description}</p>
            
          </div>
        );
      })}
      <div> <h3>Genres:</h3>
        {movieGenres.map(genre => {
          return (
            <div>
              {genre.name}
            </div>
          )
        })}
      </div>
      <button onClick={handleBackButton} className="button">Back to Home Page</button>
    </div>
  )
}

export default MovieDetails;
import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails() {

  let history = useHistory();

  // grab movie details from store
  const movieDetails = useSelector(store => store.movieDetails);
  //grab movie genres from store
  const movieGenres = useSelector(store => store.movieGenres);

  // take us back to MovieList
  const handleBackButton = () => {
    history.push('/');
  }
  
  return (
    <div className="movieDetails">
      {/* map over movieDetails to render to DOM */}
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
      {/* map over movieGenres to render to DOM */}
        {movieGenres.map(genre => {
          return (
            <div>
              {genre.name}
            </div>
          )
        })}
      </div>
      {/* button to go back to MovieList */}
      <button onClick={handleBackButton} className="button">Back to Home Page</button>
    </div>
  )
}

export default MovieDetails;
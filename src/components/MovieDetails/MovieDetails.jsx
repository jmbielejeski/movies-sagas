import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails() {

  let history = useHistory();

  let movieDetails = useSelector(store => store.movieDetails);

  console.log('movieDetails', movieDetails)

  const handleBackButton = () => {
    history.push('/');
  }
  
  return (
    <div>
      <h1>Movie Details</h1>
      <h2>{movieDetails.title}</h2>
      <p>Image goes here</p>
      <p>Description goes here</p>
      <p>Movie Genres goes here</p>
      <button onClick={handleBackButton}>Back to Home Page</button>
    </div>
  )
}

export default MovieDetails;
import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails() {

  let history = useHistory();


  const handleBackButton = () => {
    history.pushState('/');
  }
  
  return (
    <div>
      <h1>Movie Details</h1>
      <p>Movie Image goes here</p>
      <p>Description goes here</p>
      <p>Movie Genres goes here</p>
      <button onClick={handleBackButton}>Back to Home Page</button>
    </div>
  )
}

export default MovieDetails;
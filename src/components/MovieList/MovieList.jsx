import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

function MovieList() {

  let history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
      dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  const goToAddMovie = () => {
    console.log('in goToAddMovie')
    history.push('/AddMovie');
  }

  return (
      <main>
          <h1>Movie List</h1>
          <button onClick={goToAddMovie}>Add movie</button>
          <section className="movies">
              {movies.map(movie => {
                  return (
                      <div key={movie.id} >
                          <h3>{movie.title}</h3>
                          <img src={movie.poster} alt={movie.title}/>
                      </div>
                  );
              })}
          </section>
      </main>

  );
}

export default MovieList;
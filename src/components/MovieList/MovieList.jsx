import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

function MovieList() {

  let history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
      dispatch({ type: 'FETCH_MOVIES' })
  }, []);

  const goToAddMovie = () => {
    console.log('in goToAddMovie')
    history.push('/AddMovie');
  }

  const goToDetails = (movieId) => {
    // dispatch data in order to pull up specific movie details
    dispatch({
      type: 'FETCH_MOVIE_DETAILS',
      payload: movieId
    })

    dispatch({
      type: 'FETCH_MOVIE_GENRES',
      payload: movieId
    })

    // go to details page
    history.push(`/MovieDetails/`)
  }

  return (
      <main>
          <h1>Movie List</h1>
          <button onClick={goToAddMovie}>Add movie</button>
          <section className="movies">
              {movies.map(movie => {
                  return (
                      <div class="card" key={movie.id} onClick={() => goToDetails(movie.id)} >
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
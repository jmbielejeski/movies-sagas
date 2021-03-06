import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AddMovie() {

  const dispatch = useDispatch();

  // grab genres from reducer 
  const genres = useSelector(store => store.genres);


  let [movieTitle, setMovieTitle] = useState('');
  let [movieDescription, setMovieDescription] = useState('');
  let [movieImageUrl, setMovieImageUrl] = useState('')
  let [genre, setGenre] = useState('');

  // console.log('movieTitle is', movieTitle);
  // console.log('movieDescription is', movieDescription);
  // console.log('movieImageUrl is', movieImageUrl);

  // useEffect to grab genres
  useEffect(() => {
    dispatch({ type: 'FETCH_GENRES'})
    console.log('movieGenres is', genres)

  }, []);

  const handleAddMovie = () => {
    dispatch({
      type: 'ADD_MOVIE',
      payload: {
        movieTitle,
        movieDescription,
        movieImageUrl,
        genre
      }
    })
  }

  return (
    <div>
      <input 
        type="text"
        placeholder="Movie Title"
        onChange={(evt) => setMovieTitle(evt.target.value)}
      />
      <input
        type="text"
        placeholder="Movie Description"
        onChange={(evt) => setMovieDescription(evt.target.value)}
      />
      <input
        type="text"
        placeholder="Movie Image URL"
        onChange={(evt) => setMovieImageUrl(evt.target.value)}
      />
      <select 
        value={genres.id}
        onChange={(evt) => setGenre(evt.target.value)}
        >  
        <option disabled value='0'>
          Pick One!
        </option>
        {genres.map((genre) => {
          return (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          )
        })}
      </select>
      <button onClick={handleAddMovie}>Save</button>
      <button type="submit">Cancel</button>
    </div>
  )
}

export default AddMovie;
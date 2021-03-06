import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AddMovie() {

  const dispatch = useDispatch();

  // grab genres from reducer 
  const movieGenres = useSelector(store => store.genres);

  let [movieTitle, setMovieTitle] = useState('');
  let [movieDescription, setMovieDescription] = useState('');
  let [movieImageUrl, setMovieImageUrl] = useState('')

  console.log('movieTitle is', movieTitle);
  console.log('movieDescription is', movieDescription);
  console.log('movieImageUrl is', movieImageUrl);


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
      <select name="Genre" id="movieGenre">
        <option>Adventure</option>
        <option>Animated</option>
        <option>Biography</option>
        <option>Comedy</option>
        <option>Disaster</option>
        <option>Drama</option>
        <option>Epic</option>
        <option>Fantasy</option>
        <option>Musical</option>
        <option>Romantic</option>
        <option>Science Fiction</option>
        <option>Space-Opera</option>
        <option>Superhero</option>        
      </select>
      <button type="submit">Save</button>
      <button type="submit">Cancel</button>
    </div>
  )
}

export default AddMovie;
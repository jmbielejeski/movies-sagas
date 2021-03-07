import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";


function AddMovie() {

  const dispatch = useDispatch();
  let history = useHistory();


  // grab genres from reducer 
  const genres = useSelector(store => store.genres);


  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');
  let [poster, setPoster] = useState('')
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
        title,
        description,
        poster,
        genre_id: Number(genre)
      }
    })
    history.push('/');
  }

  const handleCancel = () =>{
    history.push('/')
  }

  return (
    <div>
      <input 
        type="text"
        placeholder="Movie Title"
        onChange={(evt) => setTitle(evt.target.value)}
      />
      <input
        type="text"
        placeholder="Movie Description"
        onChange={(evt) => setDescription(evt.target.value)}
      />
      <input
        type="text"
        placeholder="Movie Image URL"
        onChange={(evt) => setPoster(evt.target.value)}
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
      <button onClick={handleAddMovie} className="button">Save</button>
      <button onClick={handleCancel} className="button">Cancel</button>
    </div>
  )
}

export default AddMovie;


function AddMovie() {
  return (
    <div>
      <input 
        type="text"
        placeholder="Movie Title"
      />
      <input
        type="text"
        placeholder="Movie Description"
      />
      <input
        type="text"
        placeholder="Movie Image URL"
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
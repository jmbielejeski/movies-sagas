import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import AddMovie from '../AddMovie/AddMovie';
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <h1></h1>
      <Router>        
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route exact path="/AddMovie">
          <AddMovie />
        </Route>
        <Route exact path="/MovieDetails">
          <MovieDetails />
        </Route>
      </Router>
    </div>
  );
}


export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchAllGenres);
    yield takeEvery('ADD_MOVIE', addMovie);
    yield takeEvery('FETCH_DETAILS', fetchDetails);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        // console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

// sage to grab and send new movie to DB
function* addMovie(action) {
  console.log('addMovie payload', action.payload)
  try {
    yield axios.post('/api/movie', action.payload)
  }
  catch {
    console.log('failed to add movie')
  }
}

function* fetchAllGenres() {
  // fetch all genres from DB
  try {
    const genres = yield axios.get('/api/genre');
    // console.log('get all genres.data', genres.data);
    yield put({ type: 'SET_GENRES', payload: genres.data });
  }
  catch {
    console.log('error getting genres');
  }
}

// fetch details for movie
function* fetchDetails(action) {
  console.log('fetching details');

  let response = yield axios.get(`/api/details/${action.payload}`)

  try {
    yield put({
      type: 'SET_DETAILS',
      payload: response.data
    })
  }
  catch {
    console.log('failed to get movie details')
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// store movie details
const movieDetails = (state = {}, action) => {
  if (action.type === 'SET_DETAILS') {
    return action.payload;
  }
  return state;
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieDetails,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

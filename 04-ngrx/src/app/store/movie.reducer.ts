import { createReducer, on } from '@ngrx/store';
import { Movie } from '../models/movie';
import * as actions from './movie.actions';

export interface MovieState {
  moviesList: Movie[];
  selectedMovieId: string | null;
}

export const initialState: MovieState = {
  moviesList: [],
  selectedMovieId: null,
};

export const movieReducer = createReducer(
  initialState,
  on(actions.getMovies, (state) => state),
  on(actions.addMovies, (state, new_movies) => {
    return {
      ...state,
      moviesList: new_movies.list,
    };
  }),
  on(actions.selectMovie, (state, action) => {
    return {
      ...state,
      selectedMovieId: action.movieId,
    };
  }),
);

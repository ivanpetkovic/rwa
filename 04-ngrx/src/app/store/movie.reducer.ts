import { createReducer, on } from '@ngrx/store';
import { Movie } from '../models/movie';
import * as actions from './movie.actions';

export interface MovieState {
  movies: Movie[];
  selectedMovieId?: string;
}

export const initialState: MovieState = {
  movies: [],
  selectedMovieId: undefined,
};

export const movieReducer = createReducer(
  initialState,
  on(actions.getMovies, (state) => state),
  on(actions.addMovies, (state, new_movies) => {
    return {
      ...state,
      movies: new_movies.list,
    };
  }),
);

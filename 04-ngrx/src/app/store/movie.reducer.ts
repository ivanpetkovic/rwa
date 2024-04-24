import { createReducer, on } from '@ngrx/store';
import { Movie } from '../models/movie';
import * as actions from './movie.actions';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

export interface MovieState extends EntityState<Movie> {
  selectedMovieId: string | null;
}

export const initialState: MovieState = {
  ids: [],
  entities: {},
  selectedMovieId: null,
};

export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>();

export const movieReducer = createReducer(
  initialState,
  on(actions.addMovies, (state, new_movies) => {
    return adapter.addMany(new_movies.list, state);
  }),
  on(actions.selectMovie, (state, action) => {
    return {
      ...state,
      selectedMovieId: action.movieId,
    };
  }),
);

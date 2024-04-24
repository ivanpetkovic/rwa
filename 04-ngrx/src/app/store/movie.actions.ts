import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movie';

// get user's favorite movies
export const loadMovies = createAction('Load movies');
// export const loadMoviesSuccess = createAction('Load movies success');
export const addMovies = createAction('Add movies', props<{ list: Movie[] }>());
export const selectMovie = createAction(
  'Select movie',
  props<{ movieId: string }>(),
);

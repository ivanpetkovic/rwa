import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movie';

// get user's favorite movies
export const getMovies = createAction('Get movies');
export const addMovies = createAction('Add movies', props<{ list: Movie[] }>());

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieState } from './movie.reducer';
import { Movie } from '../models/movie';

export const moviesFeature = createFeatureSelector<MovieState>('movies');

export const selectAllMovies = createSelector(moviesFeature, (movies) => {
  return movies.ids
    .map((id) => movies.entities[id])
    .filter((movie) => movie != undefined)
    .map((movie) => movie as Movie);
});

export const selectAllMoviesAsDict = createSelector(
  moviesFeature,
  (movies) => movies.entities,
);

export const selectGreatMovies = createSelector(selectAllMovies, (list) => {
  return list.filter((movie) => movie && movie.score > 8);
});

export const selectCurrentMovieId = createSelector(
  moviesFeature,
  (movies) => movies.selectedMovieId,
);

export const selectCurrentMovie = createSelector(
  selectAllMoviesAsDict,
  selectCurrentMovieId,
  (moviesDict, movieId) => {
    return movieId ? moviesDict[movieId] : undefined;
  },
);

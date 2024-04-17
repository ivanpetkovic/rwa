import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieState } from './movie.reducer';

export const moviesFeature = createFeatureSelector<MovieState>('movies');

export const selectAllMovies = createSelector(moviesFeature, (movies) => {
  return movies.moviesList;
});

export const selectGreatMovies = createSelector(selectAllMovies, (list) => {
  return list.filter((movie) => movie.score > 8);
});

export const selectCurrentMovieId = createSelector(
  moviesFeature,
  (movies) => movies.selectedMovieId,
);

export const selectCurrentMovie = createSelector(
  selectAllMovies,
  selectCurrentMovieId,
  (movies, movieId) => {
    return movies.find((movie) => movie.id === movieId);
  },
);

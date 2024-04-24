import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import { Movie } from '../models/movie';
import { MoviesService } from '../services/movies.service';
import {
  loadMovies as loadMoviesAction,
  addMovies as addMoviesAction,
} from './movie.actions';

@Injectable()
export class MoviesEffect {
  constructor(
    private actions$: Actions,
    private service: MoviesService,
  ) {}

  loadMovies = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMoviesAction.type),
      switchMap((action: Action) =>
        this.service
          .getMovies()
          .pipe(map((movies: Movie[]) => addMoviesAction({ list: movies }))),
      ),
    ),
  );
}

// export const loadMovies = createEffect(
//   (actions$ = inject(Actions), service = inject(MoviesService)) => {
//     return actions$.pipe(
//       ofType(loadMoviesAction),
//       exhaustMap(() =>
//         service
//           .getMovies()
//           .pipe(map((movies: Movie[]) => addMoviesAction({ list: movies }))),
//       ),
//     );
//   },
//   { functional: true },
// );

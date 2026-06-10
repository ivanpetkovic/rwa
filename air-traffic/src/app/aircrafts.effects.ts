import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadAircrafts, loadAircraftsFail, loadAircraftsSuccess } from './store/aircraft.actions';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Aircraft } from './models/aircraft.model';

const API_URL = 'http://localhost:3000/aircrafts';

@Injectable()
export class AircraftsEffects {
  private http = inject(HttpClient);
  private actions$ = inject(Actions);

  loadAircrafts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAircrafts),
      mergeMap(({ size, page }) => {
        return this.http.get<Aircraft[]>(`${API_URL}?page=${page}&size=${size}`).pipe(
          map((list: Aircraft[]) => loadAircraftsSuccess({ aircrafts: list })),
          catchError((err: HttpErrorResponse) => of(loadAircraftsFail({ message: err.message }))),
        );
      }),
    ),
  );
}

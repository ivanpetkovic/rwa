import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { AircraftsEffects } from './aircrafts.effects';
import { provideStore } from '@ngrx/store';
import { aircraftsReducer } from './store/aircraft.reducer';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideEffects(AircraftsEffects),
    provideStore({
      aircrafts: aircraftsReducer,
    }),
    provideHttpClient(),
  ],
};

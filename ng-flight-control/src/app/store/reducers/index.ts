import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { aircraftsReducer, AircraftsState } from './aircrafts.reducer';

export interface AppState {
  aircrafts: AircraftsState
}

export const reducers: ActionReducerMap<AppState> = {
  aircrafts: aircraftsReducer
};


export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];

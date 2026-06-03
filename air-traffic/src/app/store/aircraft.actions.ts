import { createAction, props } from '@ngrx/store';
import { Aircraft } from '../models/aircraft.model';

export const loadAircrafts = createAction(
  'LOAD AIRCRAFTS',
  props<{ size: number; page: number }>(),
);

export const loadAircraftsSuccess = createAction(
  'LOAD AIRCRAFTS SUCCESS',
  props<{ aircrafts: Aircraft[] }>(),
);

export const loadAircraftsFail = createAction('LOAD AIRCRAFTS FAIL', props<{ message: string }>());

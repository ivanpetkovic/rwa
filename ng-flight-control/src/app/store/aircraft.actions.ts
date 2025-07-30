import { createAction, props } from "@ngrx/store";
import { Aircraft } from "../models/aircraft";

export const loadAircrafts = createAction('Load Aircrafts');
export const setAircrafts = createAction('Set Aircrafts', props<({aircrafts: Aircraft[]})>());
export const selectAircraft = createAction('Select Aircraft', props<({selected: string})>());
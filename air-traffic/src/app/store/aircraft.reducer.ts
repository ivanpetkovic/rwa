import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Aircraft } from '../models/aircraft.model';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { loadAircraftsSuccess } from '../store/aircraft.actions';

export interface AircraftsList extends EntityState<Aircraft> {
  selectedAircraftId: string | null;
}

const adapter = createEntityAdapter<Aircraft>({
  selectId: (a: Aircraft) => a.id,
});

const initialState = adapter.getInitialState({
  selectedAircraftId: null,
});

export const aircraftsReducer = createReducer(
  initialState,
  on(loadAircraftsSuccess, (state, { aircrafts }) => adapter.addMany(aircrafts, state)),
);

export const selectAircrafts = createFeatureSelector<AircraftsList>('aircrafts');

export const selectAllAircrafts = createSelector(selectAircrafts, adapter.getSelectors().selectAll);

export const selectCurrentAircraft = createSelector(
  selectAircrafts,
  selectAllAircrafts,
  (state, aircrafts) => {
    state.entities[state.selectedAircraftId];
    return aircrafts.filter((aircraft) => aircraft.id === state.selectedAircraftId)[0];
  },
);

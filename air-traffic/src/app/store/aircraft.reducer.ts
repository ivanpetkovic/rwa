import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Aircraft } from '../models/aircraft.model';
import { createReducer, on } from '@ngrx/store';
import { loadAircrafts, loadAircraftsSuccess } from '../store/aircraft.actions';

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

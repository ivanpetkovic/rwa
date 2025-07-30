import { createReducer, on } from "@ngrx/store";
import { Aircraft } from "../../models/aircraft";
import { selectAircraft, setAircrafts } from "../aircraft.actions";


export interface AircraftsState {
    aircrafts: Aircraft[],
    selectedAircraft: string | null
}

export const initialState: AircraftsState = {
    aircrafts: [],
    selectedAircraft: null
}

export const aircraftsReducer = createReducer(initialState, 
    on(setAircrafts, (state, {aircrafts}) =>  ({...state, aircrafts: aircrafts}) ),
    on(selectAircraft, (state, {selected}) => {
        return {...state, selectedAircraft: selected}
    })
);
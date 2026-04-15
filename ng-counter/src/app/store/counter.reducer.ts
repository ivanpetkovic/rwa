import { createReducer, on } from "@ngrx/store";
import { decrease, increase, setTitle } from "./counter.actions";

export interface CounterState {
    current: number;
    title: string;
}

const initialState: CounterState = {
    current: 0,
    title: "Generic counter"
};

export const counterReducer = createReducer(
    initialState,
    on(increase, (state) => ({...state, current: state.current + 1 })),
    on(decrease, (state) => ({...state, current: state.current - 1 })),
    on(setTitle, (state, {title}) => ({...state, title: title }))
)
import { createAction, props } from "@ngrx/store";

export const increase = createAction('Increase counter');
export const decrease = createAction('Decrease counter');
export const setTitle = createAction('Set counter title', props<{title: string}>());

import { Action } from '@ngrx/store';

import { Quote } from '../models/quote.model';

export const ADD_QUOTE = 'ADD_QUOTE';
export const UPDATE_QUOTE = 'UPDATE_QUOTE';
export const DELETE_QUOTE = 'DELETE_QUOTE';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export class AddQuote implements Action {
  readonly type = ADD_QUOTE;

  constructor(public payload: Quote) {}
}


export class UpdateQuote implements Action {
  readonly type = UPDATE_QUOTE;

  constructor(public payload: {index: number, book: Quote}) {}
}

export class DeleteQuote implements Action {
  readonly type = DELETE_QUOTE;

  constructor(public payload: number) {}
}

export class StartEdit implements Action {
  readonly type = START_EDIT;

  constructor(public payload: number) {}
}

export class StopEdit implements Action {
  readonly type = STOP_EDIT;
}

export type QuotesListActions =
    AddQuote |
    UpdateQuote |
    DeleteQuote |
    StartEdit |
    StopEdit;

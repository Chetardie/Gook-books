import { Action } from '@ngrx/store';

import { Book } from '../models/book.model';

export const ADD_BOOK = 'ADD_BOOK';
export const UPDATE_BOOK = 'UPDATE_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';
export const GET_BOOK_BY_ID = 'GET_BOOK_BY_ID';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export class AddBook implements Action {
    readonly type = ADD_BOOK;

    constructor(public payload: Book) {}
}


export class UpdateBook implements Action {
    readonly type = UPDATE_BOOK;

    constructor(public payload: {index: number, book: Book}) {}
}

export class DeleteBook implements Action {
    readonly type = DELETE_BOOK;

    constructor(public payload: number) {}
}

export class GetBook implements Action {
    readonly type = GET_BOOK_BY_ID;

    constructor(public payload: number) {}
}

export class StartEdit implements Action {
    readonly type = START_EDIT;

    constructor(public payload: number) {}
}

export class StopEdit implements Action {
    readonly type = STOP_EDIT;
}

export type BookListActions =
    AddBook |
    UpdateBook |
    GetBook |
    DeleteBook |
    StartEdit |
    StopEdit;

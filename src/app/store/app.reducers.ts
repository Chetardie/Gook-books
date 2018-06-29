import { ActionReducerMap } from '@ngrx/store';

import * as fromBookList from '../books/store/book-list.reducer';
import * as fromAuth from '../auth/store/auth.reducers';

export interface AppState {
    bookList: fromBookList.State;
    auth: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
    bookList: fromBookList.bookListReducer,
    auth: fromAuth.authReducer
};

import { Book } from '../models/book.model';
import * as BookListActions from './book-list.actions';

const initialState: State = {
    books: [],
    selectedBook: null,
    selectedBookIndex: -1,
    editedBook: null,
    editedBookIndex: -1
};

export interface State {
    books: Book[];
    selectedBook: Book;
    selectedBookIndex: number;
    editedBook: Book;
    editedBookIndex: number;
}

export function bookListReducer(state = initialState, action: BookListActions.BookListActions) {
    switch (action.type) {
        case BookListActions.ADD_BOOK:
            return {
                ...state,
                books: [ action.payload, ...state.books ]
            };
        case BookListActions.UPDATE_BOOK:
            const book = state.books[action.payload.index];
            const updatedBook = {
                ...book,
                ...action.payload.book
            };
            const books = [...state.books];
            books[action.payload.index] = updatedBook;
            return {
                ...state,
                books: books
            };
        case BookListActions.DELETE_BOOK:
            const oldBooks = [...state.books];
            oldBooks.splice(action.payload, 1);
            return {
                ...state,
                books: oldBooks
            };
        case BookListActions.GET_BOOK_BY_ID:
            const selectedBook = { ...state.books[action.payload]};
            return {
                ...state,
                selectedBook: selectedBook,
                selectedBookIndex: action.payload
            };
        case BookListActions.SET_BOOKS:
            return {
                ...state,
                books: [...state.books, ...action.payload]
            };
        case BookListActions.START_EDIT:
            const editedIngredient = {...state.books[action.payload]};
            return {
                ...state,
                editedBook: editedIngredient,
                editedBookIndex: action.payload
            };
        case BookListActions.STOP_EDIT:
            return {
                ...state,
                editedBook: null,
                editedBookIndex: -1
            };

        default:
            return state;
    }
}

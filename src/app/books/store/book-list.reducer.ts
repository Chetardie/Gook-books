import { Book } from '../models/book.model';
import * as BookListActions from './book-list.actions';

const initialState: State = {
    books: [
    new Book({ title: 'Tom Soyer', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        author: { firstName: 'Mark', lastName: 'Twain'}}),
    new Book({title: 'Racing cars', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        author: { firstName: 'Vladislav', lastName: 'Burdeniuk'}}),
        new Book({ title: 'Batman', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        author: { firstName: 'Vladislav', lastName: 'Burdeniuk'}}),
    new Book({title: 'Lord of the ring', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        author: { firstName: 'Vladislav', lastName: 'Burdeniuk'}}),
        new Book({ title: 'Tom Soyer', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        author: { firstName: 'Mark', lastName: 'Twain'}}),
    new Book({title: 'Racing cars', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        author: { firstName: 'Vladislav', lastName: 'Burdeniuk'}}),
        new Book({ title: 'Batman', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        author: { firstName: 'Vladislav', lastName: 'Burdeniuk'}}),
    new Book({title: 'Lord of the ring', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        author: { firstName: 'Vladislav', lastName: 'Burdeniuk'}})
    ],
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
                books: [...state.books, action.payload]
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

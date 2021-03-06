import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { map, switchMap, take } from 'rxjs/operators';
import { from } from 'rxjs';

import * as firebase from 'firebase';

import * as BookListActions from './book-list.actions';
import { Book } from '../models/book.model';
import { IBook } from '../models/IBook';

@Injectable()
export class BookListEffects {
    private postKey: string;

    @Effect()
    addBook = this.actions$
        .pipe(ofType(BookListActions.TRY_ADD_BOOK),
            map((action: BookListActions.TryAddBook) => action.payload),
            switchMap((data: Book) => from(this.addNewBook(data))),
            switchMap(() => from(firebase.database().ref('/books/' + this.postKey).once('value'))),
            map((snapshot: any) => {
                this.router.navigate( [ '/books' ]);
                return new BookListActions.AddBook(new Book(snapshot.val()));
            }));

    @Effect()
    getBooks = this.actions$
        .pipe(ofType(BookListActions.TRY_GET_BOOKS),
            take(1),
            switchMap(() => from(this.fetchBooks())),
            map((snapshot: any) => snapshot.val()),
            map((value) => {
                const keyValuePairs = Object.entries(value);
                let books = [];
                for (const keyValuePair of keyValuePairs) {
                    (<IBook>keyValuePair[1]).uid = keyValuePair[0];
                    books = [...books, new Book(<IBook>keyValuePair[1])];
                }
                return books;
            }),
            map((books: Book[]) => new BookListActions.SetBooks(books)));

    constructor(private actions$: Actions, private router: Router) {
    }

    private fetchBooks() {
        return firebase.database().ref('books/').once('value');
    }

    private addNewBook(book: Book) {
        // Get a key for a new book.
        this.postKey = firebase.database().ref().child('books').push().key;
        return firebase.database().ref('books/' + this.postKey).set(book);
      }
}

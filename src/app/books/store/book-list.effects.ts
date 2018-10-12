import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Router } from '@angular/router';
import { map, switchMap, take } from 'rxjs/operators';
import { from } from 'rxjs';

import * as firebase from 'firebase';

import * as BookListActions from './book-list.actions';
import { Book } from '../models/book.model';

@Injectable()
export class BookListEffects {
    private postKey: string;

    @Effect()
    addBook = this.actions$
        .ofType(BookListActions.TRY_ADD_BOOK)
        .pipe(map((action: BookListActions.TryAddBook) => action.payload),
            switchMap((data: Book) => from(this.addNewBook(data))),
            switchMap(() => from(firebase.database().ref('/books/' + this.postKey).once('value'))),
            map((snapshot: any) => {
                this.router.navigate( [ '/books' ]);
                return new BookListActions.AddBook(new Book(snapshot.val()));
            }));

    @Effect()
    getBooks = this.actions$
        .ofType(BookListActions.TRY_GET_BOOKS)
        .pipe(take(1),
            switchMap(() => from(this.fetchBooks())),
            map((snapshot: any) => snapshot.val()),
            map((value) => Object.values(value)),
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

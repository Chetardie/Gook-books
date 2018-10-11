import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Router } from '@angular/router';
import { map, switchMap, mergeMap, catchError } from 'rxjs/operators';
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
        .pipe(map((action: BookListActions.TryAddBook) => {
                return action.payload;
            }),
            switchMap((data: Book) => {
                return from(this.addNewBook(data));
            }),
            switchMap(() => {
                return from(firebase.database().ref('/books/' + this.postKey).once('value'));
            }),
            map((snapshot: any) => {
                this.router.navigate( [ '/books' ]);
                return new BookListActions.AddBook(new Book(snapshot.val()));
            }));

    constructor(private actions$: Actions, private router: Router) {
    }

    private addNewBook(book: Book) {
        // Get a key for a new book.
        this.postKey = firebase.database().ref().child('books').push().key;
        return firebase.database().ref('books/' + this.postKey).set(book);
      }
}

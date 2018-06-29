import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Book } from '../models/book.model';
import { IBookAuthor } from '../models/IBookAuthor';
import { Store } from '@ngrx/store';
import * as BookListActions from '../store/book-list.actions';
import * as fromApp from '../../store/app.reducers';

@Component( {
  selector: 'gook-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: [ './book-edit.component.scss' ]
} )
export class BookEditComponent implements OnInit, OnDestroy {
  public editMode: boolean = false;
  public bookForm: FormGroup;
  private storeSubscription: Subscription;
  public editedBook: Book;
  private editedBookIndex: number;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private store: Store<fromApp.AppState> ) {
  }

  ngOnInit() {
    this.storeSubscription = this.store.select( 'bookList' )
      .subscribe( ( data ) => {
        if (data.editedBookIndex > -1) {
          this.editedBook = data.editedBook;
          this.editedBookIndex = data.editedBookIndex;
          this.editMode = true;
        } else {
          this.editMode = false;
        }

        this.initForm();
      } );
  }


  ngOnDestroy() {
    this.store.dispatch( new BookListActions.StopEdit() );
    this.storeSubscription.unsubscribe();
  }

  public onSubmit(): void {
    const newBook = new Book( this.bookForm.value );
    if (this.editMode) {
      this.store.dispatch( new BookListActions.UpdateBook( { index: this.editedBookIndex, book: newBook } ) );
      this.store.dispatch( new BookListActions.GetBook( this.editedBookIndex ) );
    } else {
      this.store.dispatch( new BookListActions.AddBook( this.bookForm.value ) );
    }

    this.editMode = false;
    this.onCancel();
  }

  public onCancel(): void {
    this.bookForm.reset();
    this.router.navigate( [ '../' ], { relativeTo: this.route } );
  }

  private initForm(): void {
    let bookTitle = '';
    let author: IBookAuthor = {
      firstName: '',
      lastName: ''
    };
    let bookDescription = '';

    if (this.editMode) {
      bookTitle = this.editedBook.title;
      author = this.editedBook.author;
      bookDescription = this.editedBook.description;
    }


    this.bookForm = new FormGroup( {
      'title': new FormControl( bookTitle, Validators.required ),
      'author': new FormGroup( {
        'firstName': new FormControl( author.firstName, Validators.required ),
        'lastName': new FormControl( author.lastName, Validators.required )
      } ),
      'description': new FormControl( bookDescription, Validators.required )
    } );
  }
}

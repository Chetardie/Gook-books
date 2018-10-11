import { Component, OnDestroy, OnInit, ContentChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

// third-party imports
import { Store } from '@ngrx/store';

// app store
import { State } from '../../store/book-list.reducer';
import * as BookListActions from '../../store/book-list.actions';
import * as fromApp from '../../../store/app.reducers';

import { Book } from '../../models/book.model';
import { AutoUnsubscribe } from '../../../shared/decorators/autounsubscribe.decorator';
import { BookFormComponent } from '../../components/book-form/book-form.component';

@Component( {
  selector: 'gook-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: [ './book-edit.component.scss' ]
} )
@AutoUnsubscribe()
export class BookEditComponent implements OnInit, OnDestroy {
  @ContentChild(BookFormComponent) bookFormComponent: BookFormComponent;
  public storeData$: Observable<State>;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private store: Store<fromApp.AppState> ) {
  }

  ngOnInit() {
    this.storeData$ = this.store.select('bookList');
  }


  ngOnDestroy() {
    this.store.dispatch( new BookListActions.StopEdit() );
  }

  public onEditBook(event: { group: FormGroup, bookIndex: number}): void {
    const newBook = new Book( event.group.value );
    this.store.dispatch( new BookListActions.UpdateBook( { index: event.bookIndex, book: newBook } ) );
    this.store.dispatch( new BookListActions.GetBook( event.bookIndex ) );

    this.router.navigate( [ '../' ], { relativeTo: this.route } );
  }
}

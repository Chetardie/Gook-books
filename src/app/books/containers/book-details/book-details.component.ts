import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/internal/Observable';

import { Book } from '../../models/book.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducers';
import * as BookListActions from '../../store/book-list.actions';

import { AutoUnsubscribe } from '../../../shared/decorators/autounsubscribe.decorator';
import { NgLog } from '../../../shared/decorators/class.logger.decorator';

@Component( {
  selector: 'gook-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: [ './book-details.component.scss' ]
})
@AutoUnsubscribe()
@NgLog()
export class BookDetailsComponent implements OnInit, OnDestroy {
  public bookList$: Observable<{ selectedBook: Book, selectedBookIndex: number}>;

  constructor(private route: ActivatedRoute,
               private router: Router,
               private store: Store<fromApp.AppState> ) {
  }

  ngOnInit() {
    this.bookList$ = this.store.select('bookList');
  }

  ngOnDestroy() {}

  public onEditBook(selectedBookIndex: number): void {
    this.store.dispatch( new BookListActions.StartEdit( selectedBookIndex ) );
    this.router.navigate( [ 'edit' ], { relativeTo: this.route } );
  }

  public onDeleteBook(selectedBookIndex: number): void {
    this.store.dispatch( new BookListActions.DeleteBook( selectedBookIndex ) );
    this.router.navigate( [ '/books' ] );
  }
}

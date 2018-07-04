import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from '../models/book.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as BookListActions from '../store/book-list.actions';
import { Subscription } from 'rxjs';

import { AutoUnsubscribe } from '../../shared/decorators/autounsubscribe.decorator';
import { NgLog } from '../../shared/decorators/class.logger.decorator';

@Component( {
  selector: 'gook-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: [ './book-details.component.scss' ]
})
@AutoUnsubscribe
@NgLog()
export class BookDetailsComponent implements OnInit, OnDestroy {
  public selectedBook: Book;
  private selectedBookIndex: number;
  private storeSubscription: Subscription;

  constructor(private route: ActivatedRoute,
               private router: Router,
               private store: Store<fromApp.AppState> ) {
  }

  ngOnInit() {
    this.storeSubscription = this.store.select( 'bookList' )
      .subscribe( ( bookListState ) => {
        this.selectedBook = bookListState.selectedBook;
        this.selectedBookIndex = bookListState.selectedBookIndex;
      });
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

  public onEditBook(): void {
    this.store.dispatch( new BookListActions.StartEdit( this.selectedBookIndex ) );
    this.router.navigate( [ 'edit' ], { relativeTo: this.route } );
  }

  public onDeleteBook(): void {
    this.store.dispatch( new BookListActions.DeleteBook( this.selectedBookIndex ) );
    this.router.navigate( [ '/books' ] );
  }
}

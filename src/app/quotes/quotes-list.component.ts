import { Component, OnInit } from '@angular/core';
import * as fromApp from '../store/app.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../books/models/book.model';

@Component({
  selector: 'gook-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss']
})
export class QuotesListComponent implements OnInit {
  public quotesListState: Observable<{books: Book[]}>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.quotesListState = this.store.select('quotesList');
  }

}

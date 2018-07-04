import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducers';
import { Quote } from './models/quote.model';

@Component({
  selector: 'gook-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss']
})
export class QuotesListComponent implements OnInit {
  public quotesListState: Observable<{quotes: Quote[]}>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.quotesListState = this.store.select('quotesList');
  }

}

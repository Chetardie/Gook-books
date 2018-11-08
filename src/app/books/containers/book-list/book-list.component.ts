import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../store/app.reducers';
import * as BookListActions from '../../store/book-list.actions';

@Component({
  selector: 'gook-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  public searchText: string;
  public bookListState$: Observable<{books: Book[]}>;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new BookListActions.TryGetBooks());
    this.bookListState$ = this.store.select('bookList');
  }

  public onBookSelected(index: number): void {
      this.store.dispatch(new BookListActions.GetBook(index));
  }

  public onNewBookAdd(): void {
    this.router.navigate(['new'], { relativeTo: this.activeRoute });
  }
}

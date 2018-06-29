import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BooksService } from '../books.service';
import { Subscription } from 'rxjs';
import { Book } from '../models/book.model';

@Component({
  selector: 'gook-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  public books: Book[];
  public searchText: string;
  private booksSubscription: Subscription;
  constructor(private router: Router, private activeRoute: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit() {
    this.booksSubscription = this.booksService.booksListChanged
        .subscribe((books: Book[]) => this.books = books);
    this.books = this.booksService.getBooks();

  }
  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }
  public onNewBookAdd(): void {
    this.router.navigate(['new'], {relativeTo: this.activeRoute});
    this.booksService.bookWasSelected.next(true);
  }

  public onBookSelected(): void {
    this.booksService.bookWasSelected.next(true);
  }
}

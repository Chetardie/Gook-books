import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BooksService } from '../books.service';
import { Subscription } from 'rxjs';
import { Book } from '../models/book.model';

@Component({
  selector: 'gook-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  private booksSubscription: Subscription;
  public books: Book[];
  public searchText: string;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit() {
    this.booksSubscription = this.booksService.booksListChanged
        .subscribe(
            (books: Book[]) => this.books = books);
    this.books = this.booksService.getBooks();
  }

  public onNewBookAdd(): void {
    this.router.navigate(['new'], {relativeTo: this.activeRoute});
  }

}

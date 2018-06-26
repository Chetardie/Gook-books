import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { BooksService } from '../books.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'gook-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  id: number;

  constructor(private booksService: BooksService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.book = this.booksService.getBook(this.id);
        }
      );
  }

  public onEditBook(): void {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  public onDeleteBook(): void {
    this.booksService.deleteBook(this.id);
    this.router.navigate(['/books']);
  }
}

import { Component, Input, OnInit } from '@angular/core';

import { Book } from '../../models/book.model';

@Component({
    selector: 'gook-book-content',
    template: `
    <mat-card-content>
      <p>
        {{ book.description }}
      </p>
    </mat-card-content>
    `
})
export class BookContentComponent implements OnInit {
    @Input() book: Book;

    ngOnInit() {
      console.log('Component initialized, ', this.book);
  }
}

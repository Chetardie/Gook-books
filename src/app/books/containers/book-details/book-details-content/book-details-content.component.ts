import { Component, Input } from '../../../../../../node_modules/@angular/core';

import { Book } from '../../../models/book.model';

@Component({
    selector: 'gook-book-details-content',
    template: `
    <mat-card-content>
      <p>
        {{ book.description }}
      </p>
    </mat-card-content>
    `
})
export class BookDetailsContentComponent {
    @Input() book: Book;
}

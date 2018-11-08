import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Book } from '../../models/book.model';

@Component({
    selector: 'gook-book-content',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <mat-card-content>
      <p>
        {{ book.description }}
      </p>
    </mat-card-content>
    `
})
export class BookContentComponent {
    @Input() book: Book;
}

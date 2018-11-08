import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Book } from '../../models/book.model';

@Component({
    selector: 'gook-book-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['book-header.component.scss'],
    template: `
    <mat-card-header>
        <mat-card-title><h2>{{ book.title }}</h2></mat-card-title>
        <mat-card-subtitle><h3>{{ book.author.firstName}} {{ book.author.lastName}}</h3></mat-card-subtitle>
    </mat-card-header>
    `
})
export class BookHeaderComponent {
    @Input() book: Book;
}

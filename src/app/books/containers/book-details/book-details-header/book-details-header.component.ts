import { Component, Input } from '../../../../../../node_modules/@angular/core';

import { Book } from '../../../models/book.model';

@Component({
    selector: 'gook-book-details-header',
    styleUrls: ['book-details-header.component.scss'],
    template: `
    <mat-card-header>
        <mat-card-title><h2>{{ book.title }}</h2></mat-card-title>
        <mat-card-subtitle><h3>{{ book.author.firstName}} {{ book.author.lastName}}</h3></mat-card-subtitle>
    </mat-card-header>
    `
})
export class BookDetailsHeaderComponent {
    @Input() book: Book;
}

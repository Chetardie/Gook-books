import { Component, Input, Output, EventEmitter } from '../../../../../../node_modules/@angular/core';

import { Book } from '../../../models/book.model';

@Component({
    selector: 'gook-book-details-actions',
    styleUrls: ['book-details-actions.component.scss'],
    template: `
    <mat-card-actions>
      <button mat-raised-button color="accent" (click)="onEdit()">Edit book info</button>
      <button mat-raised-button color="warn" (click)="onDelete()">Delete</button>
    </mat-card-actions>
    `
})
export class BookDetailsActionsComponent {
    @Input() bookIndex: number;
    @Output() edited: EventEmitter<number> = new EventEmitter<number>();
    @Output() deleted: EventEmitter<number> = new EventEmitter<number>();

    public onEdit(): void {
        this.edited.emit(this.bookIndex);
    }

    public onDelete(): void {
        this.deleted.emit(this.bookIndex);
    }
}

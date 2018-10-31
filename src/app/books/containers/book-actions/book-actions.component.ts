import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'gook-book-actions',
    styleUrls: ['book-actions.component.scss'],
    template: `
    <mat-card-actions>
      <button mat-raised-button color="accent" (click)="onEdit()">Edit book info</button>
      <button mat-raised-button color="warn" (click)="onDelete()">Delete</button>
    </mat-card-actions>
  `
})
export class BookActionsComponent implements OnInit {
    @Input() bookIndex: number;
    @Output() edited: EventEmitter<number> = new EventEmitter<number>();
    @Output() deleted: EventEmitter<number> = new EventEmitter<number>();

    ngOnInit() {
        console.log('Component initialized, ', this.bookIndex);
    }

    public onEdit(): void {
        this.edited.emit(this.bookIndex);
    }

    public onDelete(): void {
        this.deleted.emit(this.bookIndex);
    }
}

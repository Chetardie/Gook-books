import { Component, ChangeDetectionStrategy, Output, Input, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


import { Book } from '../../models/book.model';

@Component({
    selector: 'gook-book-form',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['book-form.component.scss'],
    templateUrl: 'book-form.component.html'
})
export class BookFormComponent implements OnInit, OnChanges {
    @Input() book: Book;
    @Input() bookIndex: number;
    @Output() submitted: EventEmitter<{ group: FormGroup, bookIndex?: number }> =
                        new EventEmitter<{ group: FormGroup, bookIndex?: number }>();

    public bookForm: FormGroup = this.fb.group({
        title: ['', Validators.required],
        author: this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required]
        }),
        description: ['', Validators.required]
    });
    
    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {}

    ngOnChanges(simpleChanges: SimpleChanges) {
        if (this.book) {
            this.bookForm.patchValue(this.book);
        }
    }

    public onSubmit(): void {
        this.submitted.emit({ group: this.bookForm, bookIndex: this.bookIndex });
    }
}

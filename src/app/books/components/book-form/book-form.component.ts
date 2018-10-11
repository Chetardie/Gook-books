import { Component, ChangeDetectionStrategy, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { Book } from '../../models/book.model';

@Component({
    selector: 'gook-book-form',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['book-form.component.scss'],
    templateUrl: 'book-form.component.html'
})
export class BookFormComponent implements OnInit {
    @Input() book: Book;
    @Input() bookIndex: number;
    @Output() submitted: EventEmitter<{ group: FormGroup, bookIndex?: number }> =
                        new EventEmitter<{ group: FormGroup, bookIndex?: number }>();
    public bookForm: FormGroup;
    
    constructor() {
    }

    ngOnInit() {
        this.initForm(this.book);
    }

    public initForm(bookInfo?: Book): void {
        if (bookInfo) {
            this.bookForm = new FormGroup( {
                'title': new FormControl( bookInfo.title, Validators.required ),
                'author': new FormGroup( {
                    'firstName': new FormControl( bookInfo.author.firstName, Validators.required ),
                    'lastName': new FormControl( bookInfo.author.lastName, Validators.required )
                } ),
                'description': new FormControl( bookInfo.description, Validators.required )
            });
        } else {
            this.bookForm = new FormGroup( {
                'title': new FormControl( '', Validators.required ),
                'author': new FormGroup( {
                    'firstName': new FormControl( '', Validators.required ),
                    'lastName': new FormControl( '', Validators.required )
                } ),
                'description': new FormControl( '', Validators.required )
            });
        }
    }

    public onSubmit(): void {
        this.submitted.emit({ group: this.bookForm, bookIndex: this.bookIndex });
    }
}

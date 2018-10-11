import { Component, ContentChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// third-party imports
import { Store } from '@ngrx/store';

// app store
import * as BookListActions from '../../store/book-list.actions';
import * as fromApp from '../../../store/app.reducers';

import { Book } from '../../models/book.model';
import { BookFormComponent } from '../../components/book-form/book-form.component';

@Component({
    selector: 'gook-book',
    styleUrls: ['book.component.scss'],
    templateUrl: 'book.component.html'
})
export class BookComponent {
    @ContentChild(BookFormComponent) bookFormComponent: BookFormComponent;

    constructor(private store: Store<fromApp.AppState>,
                private router: Router,
                private route: ActivatedRoute) {}

    public onCreateBook(event: { group: FormGroup, bookIndex: number}): void {
        const book = new Book(event.group.value);
        this.store.dispatch( new BookListActions.AddBook(book));

        this.router.navigate( [ '../' ], { relativeTo: this.route } );
    }
}

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// third-party modules
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


import { BooksRoutingModule } from './book-routing.module';
import { SharedModule } from '../shared/shared.module';

// components
import { BookListComponent } from './containers/book-list/book-list.component';
import { BooksComponent } from './books.component';
import { BookEditComponent } from './containers/book-edit/book-edit.component';
import { BookItemComponent } from './containers/book-list/book-item/book-item.component';
import { BookDetailsComponent } from './containers/book-details/book-details.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookComponent } from './containers/book/book.component';
import { BookDetailsContentComponent } from './containers/book-details/book-details-content/book-details-content.component';
import { BookDetailsActionsComponent } from './containers/book-details/book-details-actions/book-details-actions.component';
import { BookDetailsHeaderComponent } from './containers/book-details/book-details-header/book-details-header.component';


@NgModule({
  declarations: [
    BookListComponent,
    BooksComponent,
    BookEditComponent,
    BookItemComponent,
    BookDetailsComponent,
    BookDetailsHeaderComponent,
    BookDetailsContentComponent,
    BookDetailsActionsComponent,
    BookComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: []
})
export class BooksModule {

}

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
import { BookContentComponent } from './components/book-content/book-content.component';
import { BookActionsComponent } from './components/book-actions/book-actions.component';
import { BookHeaderComponent } from './components/book-header/book-header.component';


@NgModule({
  declarations: [
    BookListComponent,
    BooksComponent,
    BookEditComponent,
    BookItemComponent,
    BookDetailsComponent,
    BookHeaderComponent,
    BookContentComponent,
    BookActionsComponent,
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

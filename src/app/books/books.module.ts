import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BookListComponent } from './book-list/book-list.component';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './book-routing.module';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookItemComponent } from './book-list/book-item/book-item.component';
import { BooksService } from './books.service';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    BookListComponent,
    BooksComponent,
    BookEditComponent,
    BookItemComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [BooksService]
})
export class BooksModule {

}

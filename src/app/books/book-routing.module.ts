import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { BookEditComponent } from './containers/book-edit/book-edit.component';
import { BookDetailsComponent } from './containers/book-details/book-details.component';
import { BookComponent } from './containers/book/book.component';


const booksRoutes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksComponent, canActivate: [AuthGuardService], children: [
      { path: 'new', component: BookComponent },
      { path: ':id', component: BookDetailsComponent },
      { path: ':id/edit', component: BookEditComponent }
    ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(booksRoutes)
  ],
  exports: [RouterModule]
})

export class BooksRoutingModule {}

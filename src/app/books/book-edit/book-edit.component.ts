import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { BooksService } from '../books.service';
import { Book } from '../models/book.model';
import { IBookAuthor } from '../models/IBookAuthor';

@Component({
  selector: 'gook-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: [ './book-edit.component.scss' ]
})
export class BookEditComponent implements OnInit {
  private id: number;
  public editMode: boolean = false;
  public bookForm: FormGroup;
  public book: Book;

  constructor(private route: ActivatedRoute, private router: Router, private booksService: BooksService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params[ 'id' ];
          this.editMode = params[ 'id' ] != null;
          this.initForm();
        }
      );

  }

  public onSubmit(): void {
    if (this.editMode) {
      this.booksService.updateBook(this.id, this.bookForm.value);
    } else {
      this.booksService.addBook(this.bookForm.value);
    }
    this.onCancel();
  }

  public onCancel(): void {
    this.router.navigate([ '../' ], {relativeTo: this.route});
  }

  private initForm(): void {
    let bookTitle = '';
    let author: IBookAuthor = {
      firstName: '',
      lastName: ''
    };
    let bookDescription = '';

    if (this.editMode) {
      const book = this.booksService.getBook(this.id);
      bookTitle = book.title;
      author = book.author;
      bookDescription = book.description;
    }


    this.bookForm = new FormGroup({
      'title': new FormControl(bookTitle, Validators.required),
      'author': new FormGroup({
        'firstName': new FormControl(author.firstName, Validators.required),
        'lastName': new FormControl(author.lastName, Validators.required)
        }),
      'description': new FormControl(bookDescription, Validators.required)
    });
  }


}

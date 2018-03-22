import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'gook-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: [ './book-edit.component.scss' ]
})
export class BookEditComponent implements OnInit {
  private id: number;
  public editMode: boolean = false;
  public bookForm: FormGroup;

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
    console.log(this.bookForm.getRawValue());
  }

  public onCancel(): void {
    this.router.navigate([ '../' ], {relativeTo: this.route});
  }

  private initForm(): void {
    let bookName = '';
    let bookImagePath = '';
    let bookDescription = '';

    if (this.editMode) {
      const book = this.booksService.getBook(this.id);
      bookName = book.name;
      bookImagePath = book.imagePath;
      bookDescription = book.description;
    }


    this.bookForm = new FormGroup({
      'name': new FormControl(bookName, Validators.required),
      'imagePath': new FormControl(bookImagePath, Validators.required),
      'description': new FormControl(bookDescription, Validators.required)
    });
  }


}

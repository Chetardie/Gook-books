import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'gook-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public bookSelected = false;
  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.bookWasSelected.subscribe(
      (selectionStatus) => {
        this.bookSelected = selectionStatus;
      }
    )
  }

  public calculateOrder(): number {
    if ( this.bookSelected && window.innerWidth <= 599) {
      return 2;
    }
    return 1;
  }

}

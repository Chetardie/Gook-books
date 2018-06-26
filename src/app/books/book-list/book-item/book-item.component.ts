import { Component, Input, OnInit } from '@angular/core';

import { Book } from '../../models/book.model';

@Component({
  selector: 'gook-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}

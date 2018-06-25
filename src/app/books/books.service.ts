import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Book } from './models/book.model';

@Injectable()
export class BooksService {
  public booksListChanged = new Subject<Book[]>();

  private books: Book[] = [
    new Book({ title: 'Book 1', description: 'A super tasty schnitzel',
      author: { firstName: 'Vladislav', lastName: 'Burdeniuk'}}),
    new Book({title: 'Books 2', description: 'What else  you need to say?',
      author: { firstName: 'Vladislav', lastName: 'Burdeniuk'}})
  ];

  constructor() { }

  public getBooks(): Book[] {
    return this.books.slice();
  }

  public getBook(id: number): Book {
    return this.books[id];
  }

  public addBook(bookInfo: Book): void {
    this.books.push(new Book(bookInfo));
    this.booksListChanged.next(this.books.slice());
  }

  public updateBook(index: number, newBook: Book): void {
    this.books[index] = newBook;
    this.booksListChanged.next(this.books.slice());
  }

  public deleteBook(index: number): void {
    this.books.splice(index, 1);
    this.booksListChanged.next(this.books.slice());
  }

}

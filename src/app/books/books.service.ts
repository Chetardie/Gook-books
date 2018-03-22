import { Injectable } from '@angular/core';

import { Book } from './book.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BooksService {
  public booksListChanged = new Subject<Book[]>();

  private books: Book[] = [
    new Book('Book 1', 'A super tasty schnitzel', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Book('Books 2', 'What else  you need to say?', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }

  public getBooks(): Book[] {
    return this.books.slice();
  }

  public getBook(id: number): Book {
    return this.books[id];
  }

  public addBook(book: Book): void {
    this.books.push(book);
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

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Book } from './models/book.model';

@Injectable()
export class BooksService {
  public booksListChanged = new Subject<Book[]>();

  private books: Book[] = [
    new Book({ title: 'Tom Soyer', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      author: { firstName: 'Mark', lastName: 'Twain'}}),
    new Book({title: 'Racing cars', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      author: { firstName: 'Vladislav', lastName: 'Burdeniuk'}}),
      new Book({ title: 'Batman', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      author: { firstName: 'Vladislav', lastName: 'Burdeniuk'}}),
    new Book({title: 'Lord of the ring', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
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

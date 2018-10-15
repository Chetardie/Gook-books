import { IBookAuthor } from './IBookAuthor';
import { IBook } from './IBook';

export class Book implements  IBook {
  public uid: string;
  public title: string;
  public description: string;
  public author: IBookAuthor;
  public rate: number = 0;
  public quotes: string[] = [];

  constructor(bookInfo: IBook) {
    this.uid = bookInfo.uid ? bookInfo.uid : null;
    this.rate = bookInfo.rate ? bookInfo.rate : 0;
    this.quotes = bookInfo.quotes ? [...bookInfo.quotes] : [];
    this.title = bookInfo.title;
    this.description = bookInfo.description;
    this.author = bookInfo.author;
  }
}

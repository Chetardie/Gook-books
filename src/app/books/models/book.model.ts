import { IBookAuthor } from './IBookAuthor';
import { IBook } from './IBook';

export class Book implements  IBook {
  public title: string;
  public description: string;
  public author: IBookAuthor;
  public rate: number = 0;
  public quotes: string[] = [];

  constructor(bookInfo: { title: string, description: string, author: IBookAuthor }) {
    this.rate = 0;
    this.quotes = [];
    this.title = bookInfo.title;
    this.description = bookInfo.description;
    this.author = bookInfo.author;
  }
}

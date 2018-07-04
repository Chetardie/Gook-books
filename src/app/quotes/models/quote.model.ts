import { IBookAuthor } from '../../books/models/IBookAuthor';

export class Quote {
  public description: string;
  public author: IBookAuthor;

  constructor(quoteInfo: { description: string, author: IBookAuthor }) {
    this.description = quoteInfo.description;
    this.author = quoteInfo.author;
  }
}

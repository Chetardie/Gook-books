interface IBook {
  title: string;
  description: string;
  author: IBookAuthor;
  rate: number;
  quotes: string[];
}

export interface IBookAuthor {
  firstName: string;
  lastName: string;
}

export class Book implements  IBook {
  public title: string;
  public description: string;
  public author: IBookAuthor;
  public rate: number = 0;
  public quotes: string[] = [];

  constructor(bookInfo: { title: string, description: string, author: IBookAuthor }) {
    this.title = bookInfo.title;
    this.description = bookInfo.description;
    this.author = bookInfo.author;
  }
}

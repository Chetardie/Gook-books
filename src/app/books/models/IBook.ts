import { IBookAuthor } from './IBookAuthor';

export interface IBook {
    title: string;
    description: string;
    author: IBookAuthor;
    rate: number;
    quotes: string[];
}

import { IBookAuthor } from './IBookAuthor';

export interface IBook {
    uid: string;
    title: string;
    description: string;
    author: IBookAuthor;
    rate: number;
    quotes: string[];
}

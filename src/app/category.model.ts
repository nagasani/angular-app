import { Book } from './book.model';

export class Category {
  id!: number;
  name!: string;
  books!: Book[];
}

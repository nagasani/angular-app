import { Author } from './author.model';
import { Category } from './category.model';

export class Book {
  id!: number;
  title!: string;
  price!: number;
  status!: string;
  author!: Author;
  categories!: Category[];
}

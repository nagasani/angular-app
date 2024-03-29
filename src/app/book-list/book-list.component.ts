import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] | undefined;

  constructor(private bookService: BookService, private router: Router) {

  }

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks() {
    this.bookService.getBookList().subscribe(data => {
      this.books = data;
    });
  }

  updateBook(id: number) {
    this.router.navigate(['update-book', id]);
  }

}
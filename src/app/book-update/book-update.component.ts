import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  id!: number;
  book: Book = new Book();

  constructor(private bookService: BookService,
    private route: ActivatedRoute, private router: Router) { }

  private getBookById() {
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.id).subscribe({
      next: (data) => {
        this.book = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getBookById();
  }

  updateBook() {
    this.bookService.updateBook(this.id, this.book).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToBookList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
  redirectToBookList() {
    this.router.navigate(['/books']);
  }
  onSubmit() {
    console.log(this.book);
    this.updateBook();
  }

}

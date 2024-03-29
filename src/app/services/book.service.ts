import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book.model';


@Injectable({
  providedIn: 'root'
})
export class BookService 
{

  private basUrl = "http://localhost:8081/api/books"

  constructor(private httpClient: HttpClient) {
  }

  getBookList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.basUrl}`);
  }

  getBookById(id: number): Observable<Book>{
    return this.httpClient.get<Book>(`${this.basUrl}/${id}`);
  }

  updateBook(id:number, book:Book): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/${id}`, book);
  }

} 
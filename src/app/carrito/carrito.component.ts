import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Book } from '../models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {


  public listCartBook: Book[] = [];
  public totalPrice = 0;
  public Math = Math;

  constructor(
    private readonly _bookService: BookService
  ) { }

  ngOnInit(): void {
    //this.listCartBook = this._bookService.getBooks();
    // this.totalPrice = this.getTotalPrice(this.listCartBook);
    this.load();
  }

  load() {
    this._bookService.getBooks().pipe(take(1)).subscribe((resp: Book[]) => {
      this.listCartBook = resp;
    });
  }

  public getTotalPrice(listCartBook: Book[]): number {
    let totalPrice = 0;
    listCartBook.forEach((book: Book) => {
      totalPrice += book.amount * book.price;
    });
    return totalPrice;
  }
}

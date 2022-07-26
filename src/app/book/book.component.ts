import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Book} from "../interfaces/Books";
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book = {} as Book;
  isIncart:boolean = false;
  ///@Output() bookEmiter  = new EventEmitter<Book>();
  constructor(private cartService:CartService) {

  }
  addToCart(){
    this.isIncart = true;
    this.cartService.add(this.book);
   // this.bookEmiter.emit(this.book);
  }

  removeFromCart(){
    this.isIncart = false;
    this.cartService.remove(this.book);

  }

  

  ngOnInit(): void {
  }

}

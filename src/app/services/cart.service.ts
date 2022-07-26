import { Injectable } from '@angular/core';
import { Book } from '../interfaces/Books';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<Book> = [];

  add(book:Book){
    this.cart.push(book);
    
    //console.log(this.cart);
  }
  remove(book:Book){
    this.cart = this.cart.filter((b)=>b != book);
    
    //console.log(this.cart);
  }
  get(){
    return this.cart;
  }

  constructor() { }
}

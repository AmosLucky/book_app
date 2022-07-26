import { Component, OnInit } from '@angular/core';
import {Book} from "../interfaces/Books";
import { BooksService } from './books.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
  // isDisabled:boolean = false;

  add(event:any){
    console.log(event);
  
  }
  constructor(private bookService: BooksService) {
    this.books = bookService.getBooks();

   }

  cart:Book[] = [];
  books:Book[] = [];
  // name:string = "Clean code";
  // autor:string = "Mark";
  // src:string = "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg";

  // name2:string = "Clean code";
  // autor2:string = "Mark";
  // src2:string = "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg";
  
  // handleClick(){
  //   this.isDisabled = true;
  // }
  // myName?:String;
  // handleChange(event: any){
  //   this.myName = event.target.value;

  //  console.log(event.target.value);
  // }

   isShowing:boolean =true;
  //  handleShowing(){
  //   this.isShowing = !this.isShowing;
  //  }

  ngOnInit(): void {
    console.log("On Inti");
    this.books = this.bookService.getBooks();
  }

}

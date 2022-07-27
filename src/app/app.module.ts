import { NgModule, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { BooksModule } from "./books/books.module";
import { BooksService } from "./books/books.service";
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthModule } from "./auth/auth.module";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";

@NgModule({
    declarations: [AppComponent, CartComponent, ],
    imports: [BrowserModule, AuthModule, BooksModule, AppRoutingModule],

    bootstrap:[AppComponent]
})

export class AppModule implements OnInit{
    constructor(){
        initializeApp(firebaseConfig);
    }

    ngOnInit(): void {
        initializeApp(firebaseConfig);
    }
    

}
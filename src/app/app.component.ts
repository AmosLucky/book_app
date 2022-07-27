import { Component, OnInit } from "@angular/core";
import { CartService } from "./services/cart.service";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";
import { AuthserviceService } from "./auth/authservice.service";
import { getAuth, signOut } from "firebase/auth";

@Component({
    selector: "app-root",
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],

})

export class AppComponent  implements OnInit{
    constructor(private cartService: CartService , private authService:AuthserviceService){

    }
    getCart(){
        return this.cartService.get();
    }
    ngOnInit(): void {
         initializeApp(firebaseConfig);
    }

    isAuthenticated(){
        return this.authService.isAuhtrnticated;
    }

    logOut(){
        this.authService.logout();
        
    }
}
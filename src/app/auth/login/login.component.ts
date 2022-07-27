import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/interfaces/Auth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 form:LoginForm = {
  email:"",
  password:""
 }
 


  constructor(private authService:AuthserviceService) { }

  ngOnInit(): void {
  }

  submit(){
   this.authService.login(this.form);
  }
  error_message():string{
   return this.authService.error_message;
  }

  isLoading(): boolean{
    return this.authService.isLoading;
  }

}

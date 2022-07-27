import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/interfaces/Auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:RegisterForm = {
    confirm_password:'',
    password:'',
    email:''
  }
  erro_msg:any = "";

  constructor(private authService:AuthserviceService) { }

  ngOnInit(): void {
  }
  password_match:boolean = true;

  register(){
    this.authService.register(this.form);
  }

  error_message():string{
    return this.authService.error_message2;
   }
 
   isLoading(): boolean{
     return this.authService.isLoading;
   }
 

}

import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/interfaces/Auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:RegisterForm = {
    username:'',
    password:'',
    email:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  register(){
    alert(this.form)
  }

}

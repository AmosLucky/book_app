import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm, RegisterForm } from '../interfaces/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
   user:any ;

  error_message:any  = "";
  error_message2:any  = "";
 isLoading:boolean = false;
 password_match:boolean = true;
 isAuhtrnticated:boolean = false;

  constructor(private router:Router) {
    const auth = getAuth();
    if(auth.currentUser != null){
      this.isAuhtrnticated = true;

    }

     alert(auth.currentUser)
   }

  logout(){
    const auth = getAuth();
        signOut(auth).then(()=>{
            this.router.navigate([""]);
        }).catch((error)=>{});
    this.isAuhtrnticated =false;

  }

  login(form:LoginForm){
    this.error_message = "";
 
    if(this.isLoading){
      return;
    }

    this.isLoading = true;
    

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email,form.password)
      .then((userCredential) => {
        
        this.isLoading = false;
        this.isAuhtrnticated = true;
        // Signed in 
         this.user = userCredential.user;
        this.router.navigate([""]);
        // ...
      })
      .catch((error) => {
        this.error_message = error.message;
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isLoading = false;
        this.isAuhtrnticated = false;
        // ..
      }).finally( ()=>(
        this.isLoading = false));
  }
  register(form:RegisterForm){
    this.error_message2 = "";
    this.isLoading = true;
    
    if(form.confirm_password != form.password){
      this.error_message2 = "Password does not match confirmation"
      this.password_match = false;
      this.isLoading = false;
      return;

    }
    const auth = getAuth();
createUserWithEmailAndPassword(auth, form.email, form.password)
  .then((userCredential) => {
    this.isLoading = false;
    this.isAuhtrnticated = true;
    this.router.navigate([""]);
   // alert(this.form.email);
    //alert(userCredential);
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    this.error_message2 = error.message;
    const errorCode = error.code;
    const errorMessage = error.message;
    this.isLoading = false;
    this.isAuhtrnticated = false;
    // ..
  });
  }
}

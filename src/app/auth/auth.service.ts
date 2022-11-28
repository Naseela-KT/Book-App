import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { LoginForm } from '../Interfaces/auth';
import { RegisterForm } from '../Interfaces/register';
import {signOut } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  isAuthenticated:boolean=false;
  isLoading:boolean=false;
  passwordMatched:boolean=true;

  login(form:LoginForm){
    if(this.isLoading) return;
    this.isLoading=true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
  .then((userCredential) => {
    this.isAuthenticated=true;
    this.router.navigate(['']);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    this.isAuthenticated=false;
  }).finally(()=>(this.isLoading=false));
  }


  register(form:RegisterForm){
    if(this.isLoading) return;
    this.isLoading=true;
    if(form.password!=form.confirm_password){
      this.passwordMatched=false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
  .then((userCredential) => {
    // Signed in
    //const user = userCredential.user;
    this.isAuthenticated=true;
  })
  .catch((error) => {
    this.isAuthenticated=false;
    const errorCode = error.code;
    const errorMessage = error.message;
  }).finally(()=>(this.isLoading=false));
  }

  signout(){
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['login']);
      this.isAuthenticated=false;
    }).catch((error) => {

    });
  }


}

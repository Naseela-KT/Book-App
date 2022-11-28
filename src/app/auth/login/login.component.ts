import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/Interfaces/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthService) { }
  form:LoginForm={
    email:'',
    password:''
  }


  submit(){
    this.authservice.login(this.form);
  }



  ngOnInit(): void {
  }

  isLoading(){
    return this.authservice.isLoading;
  }

}

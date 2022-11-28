import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/Interfaces/auth';
import { RegisterForm } from 'src/app/Interfaces/register';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
  }
  form:RegisterForm={
    email:'',
    password:'',
    confirm_password:''
  }


  submit(){
    this.authservice.register(this.form);
  }
  isLoading(){
    return this.authservice.isLoading;
  }

}

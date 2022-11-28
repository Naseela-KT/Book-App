import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { AuthService } from './auth/auth.service';
import { firebaseConfig } from './firebase.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'My-First-App';
  constructor(private authservice:AuthService){}
  ngOnInit(){
    initializeApp(firebaseConfig);
  }


  isAuthenticated(){
    return this.authservice.isAuthenticated;
  }
  logout(){
    this.authservice.signout();
  }
}

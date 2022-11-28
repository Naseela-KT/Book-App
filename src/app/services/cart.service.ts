import { Injectable } from '@angular/core';
import { book } from '../Interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  cart:book[]=[];
  add(book:book){

    this.cart.push(book);
  }
  get(){
    return this.cart;
  }
  remove(book:book){
    this.cart=this.cart.filter(b=>b!=book)
  }
}

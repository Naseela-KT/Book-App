import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { book } from '../../Interfaces/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book:book={} as book;
  isInCart:boolean=false;

  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
  }
  addToCart(){
    this.isInCart=true;
    this.cartservice.add(this.book);
  }
  removeFromCart(){
    this.isInCart=false;
    this.cartservice.remove(this.book);
  }

}

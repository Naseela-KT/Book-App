import { Component, OnInit } from '@angular/core';
import { book } from '../Interfaces/book';
import { BooksService } from './books.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  constructor(private bookservice:BooksService) { }


  books:book[]=[];




  ngOnInit(): void {
    this.books=this.bookservice.getBooks();
  }


}

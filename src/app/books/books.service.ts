import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }
  getBooks(){
    return [
      {
        name:'Clean Code',
        author:'Robert C. Martin',
        src:'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg',
        price:700
      },

      {
       name:'The Pragmatic Programmer',
       author:'David Thomas',
       src:"https://m.media-amazon.com/images/I/518FqJvR9aL.jpg",
       price:800
      },
      {
        name:'The Art of Computer Programming',
        author:'Donald E. Knuth',
        src:"https://m.media-amazon.com/images/I/41KTzy2D6SL._SY346_.jpg",
        price:750
       },
       {
        name:'An Illustrative Introduction to Algorithms',
        author:'Dino Cajic',
        src:"https://m.media-amazon.com/images/I/81-xtTXfC-L._AC_UY218_.jpg",
        price:750
       }
    ]
  }
}

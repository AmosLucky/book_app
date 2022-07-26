import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  getBooks(){
    return [
      {name:"Clean Code", 
      autor:"Mark ben",
      amount:7000,
      image:"https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg"},
      {name:"Clean Code", 
      amount:7000,
      autor:"Mark ben",
      image:"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg"},
      {name:"Clean Code",
      amount:7000,
       autor:"Mark ben",
      image:"https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"},
    ];
  }

  constructor() { }
}

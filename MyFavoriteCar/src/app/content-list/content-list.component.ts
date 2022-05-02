import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

 _cars: Content[];

//initialize the _cars
constructor() {
  this._cars = [];
}

// define the getter
  get cars() {
    return this._cars = [];
  }

  // add new car to car list
  addCar(car: Content) : void{
    this._cars.push(car);
  }

  //return the number of list of cars
  numberOfCars(listOfCars:Content[]): number{
    return this._cars.length;
  }

/*   AS1 code
getHtml(index: number): string{
    if (index >= this._cars.length || index < 0)
    {
      return "<div>Something went terribly wrong</div>"
    }
      let carAtIndex = this._cars[index];
      return `<div class="title">${carAtIndex.title}</div>
      <div class="description">${carAtIndex.description}</div>
      <div class="creator">${carAtIndex.creator}</div>
      <div class="type">${carAtIndex.type}</div>
      <div class="image"><img src="${carAtIndex.imgURL}" width="200"></div>`;

  } */



  ngOnInit(): void {

    this.addCar({ id:1,
      title: 'Accord',
      description: 'Honda produces cars',
      creator: 'Honda',
      imgURL: 'https://media.ed.edmunds-media.com/honda/accord-hybrid/2021/oem/2021_honda_accord-hybrid_sedan_touring_fq_oem_1_1600.jpg',
      type: 'passenger',
      tags:['blue', '5 seats']
    });
    this.addCar({
      id:2,
      title: 'RAV4',
      description: 'Toyota produces cars',
      creator: 'Toyota',
      imgURL: 'https://images.hgmsites.net/med/2022-toyota-rav4-hybrid-se-awd-natl-angular-front-exterior-view_100838633_m.jpg',
      type: 'suv',
      tags:['black', '5 seats']
    });
    this.addCar(      {
      id:3,
      title: 'Escape',
      description: 'Ford produces cars',
      creator: 'Ford',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/2020_Ford_Escape_SEL%2C_front_7.11.20.jpg',
      type: 'suv',
      tags:['awd', '5 seats']
    });
  }

}

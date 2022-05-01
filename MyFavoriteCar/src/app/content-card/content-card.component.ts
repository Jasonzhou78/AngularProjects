import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  carList?: ContentList;
  constructor() {
    this.carList = new ContentList;
    let listOfCars: Content[]
    listOfCars = [
      { id:1,
        title: 'Accord',
        description: 'Honda produces cars',
        creator: 'Honda',
        imgURL: 'www.honda.ca',
        type: 'passenger',
        tags:['blue', '5 seats']
      },
      {
        id:2,
        title: 'RAV4',
        description: 'Toyota produces cars',
        creator: 'Toyota',
        imgURL: 'www.toyota.ca',
        type: 'suv',
        tags:['black', '5 seats']
      },
      {
        id:3,
        title: 'Escape',
        description: 'Ford produces cars',
        creator: 'Ford',
        imgURL: 'www.ford.ca',
        type: 'suv',
        tags:['awd', '5 seats']
      }
    ]

    for(let index = 0; index<3; index++){
      this.carList.addCar(listOfCars[index]);
    }

    console.log(this.carList);

  }

  ngOnInit(): void {
  }

}

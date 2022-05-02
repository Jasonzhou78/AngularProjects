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
    console.log("my list contains these items: ", this.carList.cars);
    this.carList.addCar({ id:1,
      title: 'Accord',
      description: 'Honda produces cars',
      creator: 'Honda',
      imgURL: 'https://media.ed.edmunds-media.com/honda/accord-hybrid/2021/oem/2021_honda_accord-hybrid_sedan_touring_fq_oem_1_1600.jpg',
      type: 'passenger',
      tags:['blue', '5 seats']
    });
    this.carList.addCar(    {
      id:2,
      title: 'RAV4',
      description: 'Toyota produces cars',
      creator: 'Toyota',
      imgURL: 'https://images.hgmsites.net/med/2022-toyota-rav4-hybrid-se-awd-natl-angular-front-exterior-view_100838633_m.jpg',
      type: 'suv',
      tags:['black', '5 seats']
    });
    this.carList.addCar(      {
      id:3,
      title: 'Escape',
      description: 'Ford produces cars',
      creator: 'Ford',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/2020_Ford_Escape_SEL%2C_front_7.11.20.jpg',
      type: 'suv',
      tags:['awd', '5 seats']
    });
  }

  ngOnInit(): void {
  }

}

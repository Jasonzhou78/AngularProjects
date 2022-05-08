import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { GetTypePipe } from '../get-type.pipe';
import { HighlightDirective } from '../highlight.directive';
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
  searchMessage?: boolean;
  clickForCheckTitle(checkTitleString: string) :boolean {
    let searchList = this._cars.filter(c => c.title == checkTitleString);
    if(searchList.length > 0) {

      return this.searchMessage = true;
    }
    else {
      return this.searchMessage = false;
    }
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
      type: 'Sedan',
      /* tags:['blue', '5 seats'] */
    });
    this.addCar({
      id:2,
      title: 'RAV4',
      description: 'Toyota produces cars',
      creator: 'Toyota',
      imgURL: 'https://images.hgmsites.net/med/2022-toyota-rav4-hybrid-se-awd-natl-angular-front-exterior-view_100838633_m.jpg',
      type: 'SUV',
      tags:['Back', '5 Seats']
    });
    this.addCar({
      id:3,
      title: 'Escape',
      description: 'Ford produces cars',
      creator: 'Ford',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/2020_Ford_Escape_SEL%2C_front_7.11.20.jpg',
      type: 'SUV',
      tags:['AWD', '5 Seats']
    });
    this.addCar({
      id:4,
      title: 'Q5',
      description: 'Audi produces cars',
      creator: 'Audi',
      imgURL: 'https://cars.usnews.com/static/images/Auto/izmo/i159614344/2021_audi_q5_angularfront.jpg',
      tags:['AWD', '5 Seats']
    });
    this.addCar({
      id:5,
      title: '300',
      description: 'Chrysler produces cars',
      creator: 'Chrysler',
      imgURL: 'https://www.motortrend.com/uploads/sites/5/2021/05/2021-chrysler-300-exterior-01.jpg',
      type: 'Sedan',
      tags:['Forward', '7 Seats']
    });
    this.addCar({
      id:6,
      title: 'Envision',
      description: 'Buick produces cars',
      creator: 'Buick',
      imgURL: 'https://s3-prod-canada.autonews.com/s3fs-public/2020BuickEncoreGX-MAIN_i.jpg',
      type: 'Sedan',
      tags:['Forward', '5 Seats']
    });
    this.addCar({
      id:7,
      title: 'F150',
      description: 'Ford produces cars',
      creator: 'Ford',
      type: 'Truck',
      tags:['AWD', '6 Seats']
    });
  }
  createNewRecord() {

  }

}

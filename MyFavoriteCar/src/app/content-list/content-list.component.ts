import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { GetTypePipe } from '../get-type.pipe';
import { HighlightDirective } from '../highlight.directive';
// import carservice in order to inject its data into this component
import { CarService } from '../car.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

 _cars: Content[] = [];
 tempId: string = '';

//initialize the _cars
constructor(private carService: CarService) {}

// define the getter
  getCars(): void {

    //this method carService.getCars() has a synchronous signature, in order to retrieve data async, we use
    //observable and of method because in most cases retrieving data happens on server.

    // this._cars = this.carService.getCars();

    this.carService.getCars()
    .subscribe(cars => this._cars = cars);
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



  ngOnInit(): void{
    //to guarantee that the data is visible before we actually use it.
    this.getCars();
  }

  getCarById() {
    this.carService.getCarById(parseInt(this.tempId))
    .subscribe(cars => this._cars)
    console.log("get car by id!");
  }

}

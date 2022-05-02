import { Content } from '../helper-files/content-interface';

export class ContentList {
private _cars: Content[];

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

  }

}

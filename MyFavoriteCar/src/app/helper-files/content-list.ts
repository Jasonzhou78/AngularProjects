import { Content } from "../helper-files/content-interface";

export class ContentList {
private _cars?: Content[];
public constructor() {
  //initialize the _cars
  this._cars = [];
}

// define the getter
get cars(): Content[] {
  return this._cars = [];
  }

  // add new car to car list
  public addCar(car: Content) {
    this._cars?.push(car);
  }

  //return the number of list of cars
  public numberOfCars(): Number{
    return (this._cars?).length;
  }
}

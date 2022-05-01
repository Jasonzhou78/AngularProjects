import { Content } from '../helper-files/content-interface';

export class ContentList {
private _cars?: Content[];
indexOfCars?: Content;

//initialize the _cars
constructor() {
  this._cars = [];
}

// define the getter
get cars() {
  return this._cars;
}

  // add new car to car list
  public addCar(car: Content) {
    this._cars?.push(car);
  }

  //return the number of list of cars
  public numberOfCars(listOfCars:Content[]): number{
    return listOfCars.length;
  }

  public showSingleCar(index: number): string {
    if(index >= 0 && index <= this.numberOfCars.length){
    return `'<h1>Title:' + this._cars?[index].title +'<br></h1>'+'<h1>Description:'+ this._cars?[index].description + '</h1><br>'+'<h1>Creator:' + this._cars?[index].creator + '</h1><br>' + '<h1>ImgURL:'+ '</h1>' + '<img src = carItem.imgURL>' + '<br><h1>Type:'+ this._cars?[index].type+'</h1>'`;
  }
    else {
      return "Your index is not effective!";
    }

  }

}

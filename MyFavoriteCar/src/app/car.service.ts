import { Injectable } from '@angular/core';
import { CARS } from './helper-files/content-db';
import { Content } from './helper-files/content-interface';

// create a injectable class called CarService
@Injectable({
  providedIn: 'root'   //the root indicate the class can be used by any class in the application
  // provide the service at root level
})
export class CarService {

  constructor() { }
  //define a function to retrieve data from content-db, thus no real data needed in the service class
  // theoretically, the service could get any data (local storage, mock data, web service) for the incoming usage
  // this way, data is separated from its application
  getCars(): Content[] {
    return CARS;
  }
}

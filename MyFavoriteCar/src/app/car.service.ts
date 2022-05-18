import { Injectable } from '@angular/core';


// create a injectable class called CarService
@Injectable({
  providedIn: 'root'   //the root indicate the class can be used by any class in the application
})
export class CarService {

  constructor() { }
}

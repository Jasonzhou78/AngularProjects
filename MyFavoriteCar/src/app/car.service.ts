import { Injectable } from '@angular/core';
import { CARS } from './helper-files/content-db';
import { Content } from './helper-files/content-interface';
import { Observable, of } from 'rxjs';
import { MessageService } from '../app/message.service';
// create a injectable class called CarService
@Injectable({
  providedIn: 'root'   //the root indicate the class can be used by any class in the application
  // provide the service at root level
})
export class CarService {

  constructor(private messageService: MessageService) { }
  //define a function to retrieve data from content-db, thus no real data needed in the service class
  // theoretically, the service could get any data (local storage, mock data, web service) for the incoming usage
  // this way, data is separated from its application
  getCars(): Observable<Content[]> {
    if(of(CARS.length))
    this.messageService.add("Content array loaded!");
    return of(CARS);

  }

  getCarById(tempId: number): Observable<Content> {

    //result from filter method will return an array not just an
  let carList: Content[] = CARS.filter(item => item.id == tempId);
  if(carList.length > 0) {
    console.log(this.messageService.add("Returned a value"));
    return of(carList[0]);
  }
  else{
    this.messageService.add("Invalid id number entered!");
    return of({
      id:-1,
      title: '',
      description: '',
      creator: '',
    });
  }

}
}

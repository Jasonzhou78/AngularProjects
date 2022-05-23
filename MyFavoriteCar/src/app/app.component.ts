import { Component } from '@angular/core';
import { CarService } from './car.service';
import { Content } from '../app/helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyFavoriteCar';
  tempId?: string;
  someCar?: Content;

  constructor(private carService: CarService) {}

  getCarById(id: string): void {
      this.carService.getCarById(parseInt(id)).subscribe(car => this.someCar = car);
    }
  }

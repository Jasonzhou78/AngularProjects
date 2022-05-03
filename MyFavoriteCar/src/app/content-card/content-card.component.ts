import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input() singleCar?: Content;
  constructor() {}
  showId() : void{
    console.log("ID:"+this.singleCar?.id);
    console.log("Title:"+this.singleCar?.title)
  }
  ngOnInit(): void {
  }

}

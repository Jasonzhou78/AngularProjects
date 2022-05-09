import { Content } from '../helper-files/content-interface';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  // create a eventEmitter type event handler newCarEvent, the data type for passing is Content.
  @Output() newCarEvent: EventEmitter<Content> = new EventEmitter<Content>();
  constructor() { }
  newCar?:Content;
  ngOnInit(): void {}
   createNewRecord(id:string, title:string, description:string, creator:string, imgURL:string, type:string):void {
    this.newCar = {
    id: parseInt(id),
    title: title,
    description: description,
    creator: creator,
    imgURL: imgURL,
    type: type,
  };
  this.newCarEvent.emit(this.newCar);
  }

}


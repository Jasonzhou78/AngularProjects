import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  // create a eventEmitter type event handler newCarEvent, the data type for passing is Content.
  @Output() newCarEvent: EventEmitter<Content> = new EventEmitter<Content>();

  newContent: Content = {
    id: -1, title: "", description: '', creator: '', type: undefined
  }

  tempId: string = "";
  tempTags: string = '';
  errorMessage: string = '';

  constructor() { }
  newCar?:Content;
  ngOnInit(): void {}
/*    createNewRecord(id:string, title:string, description:string, creator:string, imgURL:string, type:string):void {
    this.newCar = {
    id: parseInt(id),
    title: title,
    description: description,
    creator: creator,
    imgURL: imgURL,
    type: type,
  };
  this.newCarEvent.emit(this.newCar);
  } */

  addContentFromChild(): void {

    let carPromise = new Promise((success, fail) => {
      if (!this.tempId || !this.newContent.title || !this.newContent.description || !this.newContent.creator)
      {
        fail("something is missing");
        return;
      }
      // part of the promise
      console.log("child is working");
      this.newContent.tags = this.tempTags.split(';');
      this.newContent.id = parseInt(this.tempId);
      this.newCarEvent.emit(this.newContent);
      success("content added successfully " + this.newContent.id + ", title is: " + this.newContent.title);
    });
    carPromise.then((successMessage) => {
      // success function stuff
      console.log(successMessage);
      this.newContent = {
        id: -1, title: "", description: '', creator: '', type: undefined
      };
      this.tempId = "";
      this.tempTags = ""
      this.errorMessage = "";
    }).catch(failMessage => {
      this.errorMessage = "It failed terribly! - " + failMessage;
    });
  }

}


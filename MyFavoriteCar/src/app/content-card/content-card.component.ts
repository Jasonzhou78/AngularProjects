import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input() car?: Content;
  @Input() searchString?: string;
  constructor() {}
  showId() : void{
    console.log("ID:"+this.car?.id);
    console.log("Title:"+this.car?.title)
  }
  ngOnInit(): void {
  }

}

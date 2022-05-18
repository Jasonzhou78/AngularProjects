import { Component, OnInit } from '@angular/core';
import { house } from '../helper-files/house-interface';
@Component({
  selector: 'app-test-parent',
  templateUrl: './test-parent.component.html',
  styleUrls: ['./test-parent.component.scss']
})
export class TestParentComponent implements OnInit {
  parentData: house = {
    id: -2,
    area: '',
    orientation: '',
    price: ''
  };
  constructor() { }

  ngOnInit(): void {
  }
  addDataToParent(dataFromChild: house) {

    this.parentData = dataFromChild;

    console.log("this is from Parent " + this.parentData.id + " " + this.parentData.area + this.parentData.orientation + this.parentData.price);
  }

}

import { outputAst } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { house } from '../helper-files/house-interface';
@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.scss']
})
export class TestChildComponent implements OnInit {

  @Output() newEvent: EventEmitter<house> = new EventEmitter<house>();
  testData: string = '';
  tempId = '';
  newHouse: house = {
    id: -1,
    area: '',
    orientation: '',
    price: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  addNewData() {
    let housePromise = new Promise((resolved, fail) =>{
        resolved("succeeded data!") ;
      }).then(
        value1 => {console.log("value 1: " + value1); return value1;},
        // reason1=> {console.log("reason1: " + reason1)}
      ).then(
        value2 => { setTimeout(this.alertFunc, 3000); return value2;}

      ).then(
        value3 => {console.log("value 2: " + value3 + value3); return value3;}
)
    }
    alertFunc() {
      alert("Hello!");
}
}

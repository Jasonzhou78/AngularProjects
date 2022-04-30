import { Content } from "../helper-files/content-interface";

export class ContentList {
private _cars?: Content[];
public constructor() {
  //initialize the _cars
  this._cars = [];
}
// define the getter
get cars(): Content[] {
  return this._cars = [];
}

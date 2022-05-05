import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../app/helper-files/content-interface';
@Pipe({
  name: 'getType'
})
export class GetTypePipe implements PipeTransform {
/*
  transform(contentList: Content[], filterByThisType?: string): Content[] {
    console.log('filter value: ', filterByThisType);
    // return contentList.filter(c => c.type == filterByThisType);
    return contentList.filter(checkType);
    function checkType(contentList: Content) {
      if (filterByThisType) {
        return contentList.type == filterByThisType;
      } else {
        return !contentList.type;
      }
    }
  } */
   transform(carList: Content[], filterByThisType:string): Content[] {
    return carList.filter(checkType);
    function checkType(contentList: Content) {
      if (filterByThisType) {
        //to return any cars with a car type
        console.log ("filter by this type is working!" + filterByThisType);
        return (contentList.type == filterByThisType);
      } else {
        //to return any cars without a car type
        console.log ("filter no type is working!"+filterByThisType);
        return !contentList.type;
      }
    }
  }

}

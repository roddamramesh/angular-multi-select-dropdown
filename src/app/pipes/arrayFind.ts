import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'arrayFind'
})

export class ArrayFindPipe implements PipeTransform {

  transform(array: any[], compareField: any, compareValue: any): any {
    if (!compareField || !compareValue) {
      return {};
    }
    const tempArray = array.filter((object) => {
      return object[compareField] === compareValue;
    });
    if (tempArray.length > 0) {
      return tempArray[0];
    } else {
      return {};
    }
  }


}




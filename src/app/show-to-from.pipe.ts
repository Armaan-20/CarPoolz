import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showToFrom'
})
export class ShowToFromPipe implements PipeTransform {

  transform(value: any[], args: any): any[] {
    let res: any = [];
    if(args=="toOffice"){
      value.forEach((trip) => {
        if(trip.destination=="Office"){
          res.push(trip);
        } 
      });
      return res;
    }
    else if(args=="fromOffice"){
      value.forEach((trip) => {
        if(trip.pickUp=="Office"){
          res.push(trip);
        } 
      });
      return res;
    }
    return value;
  }

}

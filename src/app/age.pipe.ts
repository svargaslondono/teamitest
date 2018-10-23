import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'age'})
export class AgePipe implements PipeTransform {
  transform(dateOfBirth: string): number {
    let dob = new Date(dateOfBirth);
    let today = new Date();
    let diff = today.getTime() - dob.getTime();
    // The lenght of a year as 1000*60*60*24*365.25
    return Math.floor(diff/31557600000);
  }
}
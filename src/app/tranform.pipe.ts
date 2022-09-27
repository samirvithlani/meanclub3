import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tranform'
})
export class TranformPipe implements PipeTransform {

  transform(value:number,mul1:string): number {
    let mul = parseFloat(mul1);
    return value*mul;
  }

}

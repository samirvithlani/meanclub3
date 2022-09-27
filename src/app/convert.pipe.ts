import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value:number): number {

    let f = value *9/5 + 32;
    return f;
  }

}

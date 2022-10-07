import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencycon'
})
export class CurrencyconPipe implements PipeTransform {

  transform(amount:number,symbol:string): any {
    if(symbol == 'INR')
      return amount*70;
    else if(symbol == 'USD')
      return amount*1.5;
    else if(symbol == 'EUR')
      return amount*1.2;
    else
      return amount;
    
  }

}

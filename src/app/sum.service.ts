import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SumService {

  constructor() { }
  calSum(x:number,y:number){
    return x+y;
  }
}

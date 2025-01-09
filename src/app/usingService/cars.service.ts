import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars=["yoto","maruti"];

  constructor() { }
  getCars(){
    return this.cars;
  }
}

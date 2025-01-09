import { Component } from '@angular/core';
import { CarsService } from '../usingService/cars.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-constructor-based-di',
  imports: [CommonModule],
  templateUrl: './constructor-based-di.component.html',
  styleUrl: './constructor-based-di.component.css'
})
export class ConstructorBasedDIComponent {
  name={name:"raj",rollNo:24};
  display:string[]=[""];
  constructor(private carServices:CarsService){
    this.display = this.carServices.getCars();
  }
}

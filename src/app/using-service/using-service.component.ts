import { Component, inject } from '@angular/core';
import { CarsService } from '../usingService/cars.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-using-service',
  imports: [CommonModule],
  templateUrl: './using-service.component.html',
  styleUrl: './using-service.component.css'
})
export class UsingServiceComponent {
  carService = inject(CarsService);
  display:string[]=[''];
  constructor(){
    this.display=this.carService.getCars();
  }
}

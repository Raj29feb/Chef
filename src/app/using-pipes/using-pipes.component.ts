import { CurrencyPipe, DatePipe, DecimalPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from '../reverse.pipe';

@Component({
  selector: 'app-using-pipes',
  imports: [UpperCasePipe,CurrencyPipe,DatePipe,DecimalPipe,ReversePipe],
  templateUrl: './using-pipes.component.html',
  styleUrl: './using-pipes.component.css'
})
export class UsingPipesComponent {
 name = "RAJ";
 money=100;
 num = 110.321;
 birthday = new Date(2023,3,2)
 //using custom made pipe reverse
 str = "My name is Raj";
}

import { Component, inject } from '@angular/core';
import { SumService } from '../../sum.service';

@Component({
  selector: 'app-injection',
  imports: [],
  templateUrl: './injection.component.html',
  styleUrl: './injection.component.css'
})
export class InjectionComponent {
  val1=3;
  val2=5;
  add=inject(SumService);
  sum=this.add.calSum(this.val1,this.val2);
}

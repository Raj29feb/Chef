import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-ng-for',
  imports: [CommonModule],
  templateUrl: './ng-if-ng-for.component.html',
  styleUrl: './ng-if-ng-for.component.css'
})
export class NgIfNgForComponent {
showDetails:boolean=true;
items=["Raj","Harsh","Mohit"]
}

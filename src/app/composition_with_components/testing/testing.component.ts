import { Component } from '@angular/core';
import { Testing2Component } from '../testing2/testing2.component';

@Component({
  selector: 'app-testing',
  imports: [Testing2Component],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.css'
})
export class TestingComponent {

}

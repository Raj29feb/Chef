import { Component} from '@angular/core';
import { InputOutputChildComponent } from '../input-output-child/input-output-child.component';

@Component({
  selector: 'app-input-output',
  imports: [InputOutputChildComponent],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css'
})
export class InputOutputComponent {
  childData="This data is coming from parent";
  fromChild="";
  handleClickEvent(data:string){
    this.fromChild=data;
  }
}

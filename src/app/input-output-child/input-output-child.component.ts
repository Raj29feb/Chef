import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-output-child',
  imports: [],
  templateUrl: './input-output-child.component.html',
  styleUrl: './input-output-child.component.css'
})
export class InputOutputChildComponent {
 @Input() sendToChild:string='';
 @Output() clickEvent=new EventEmitter<string>();
 handleSendData(){
  this.clickEvent.emit("This data is send form the child");
 }
}

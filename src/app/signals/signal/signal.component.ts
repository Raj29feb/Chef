import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})

export class SignalComponent {
  name=signal("Raj");
  uppercase = computed(()=>this.name().toUpperCase());
  handleSet(){
    const input = document.getElementById("name") as HTMLInputElement;
    if(input){
      this.name.set(input.value);
    }
  }
  handleUpdate(){
    const input = document.getElementById("name") as HTMLInputElement;
    if(input){
      this.name.update(name=>name.toLowerCase())
    }
  }
}

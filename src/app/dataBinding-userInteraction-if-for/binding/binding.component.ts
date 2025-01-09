import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
imageUrl=signal("treeone.jpeg");
val:number = 2;
onway :string="This is one way binded data";
twoWay:string="This is two way binding";
arr=[
  {name:"Raj",rollno:18},
  {name:"Harsh",rollno:18},
  {name:"Anshu",rollno:18},
  {name:"Harshit",rollno:18},
  {name:"Renu",rollno:18}
]
handleChangeImage(){
  this.imageUrl.set("treetwo.jpeg");
}
}

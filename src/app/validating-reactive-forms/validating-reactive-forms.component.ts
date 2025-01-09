import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-validating-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './validating-reactive-forms.component.html',
  styleUrl: './validating-reactive-forms.component.css'
})
export class ValidatingReactiveFormsComponent {
  profileForm=new FormGroup({
    name:new FormControl("",Validators.required),
    email:new FormControl("",[Validators.required,Validators.email])
  })
  handleSubmit(event:any){
    const formData = new FormData(event.target);
    for(let [key,value] of formData){
      console.log(key,"::", value);
    }
  }
}

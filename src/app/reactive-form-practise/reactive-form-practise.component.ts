import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-practise',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-practise.component.html',
  styleUrl: './reactive-form-practise.component.css'
})
export class ReactiveFormPractiseComponent {
  profileForm = new FormGroup({
    firstName:new FormControl("",Validators.required),
    lastName:new FormControl("",Validators.required),
    rollNo:new FormControl(null,Validators.required)
  })
  handleSubmit(){
    console.log(`form data is::`,this.profileForm.value);
  }
}

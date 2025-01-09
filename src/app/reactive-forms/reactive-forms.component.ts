import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  profileForm = new FormGroup({
    firstName:new FormControl(""),
    lastName:new FormControl(""),
    rollNo:new FormControl(null),
  })
handleSubmit(){
console.log("formData::",this.profileForm.value);
}
}

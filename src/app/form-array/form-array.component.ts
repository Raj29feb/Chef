//perfect till here
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Form,
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-array',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.css',
})
export class FormArrayComponent {

  //to fade out the white sheet on the form
  isFadedOut = true;

  //pages inside the form to navigate
  page:number=0;

  //formgroup for dish
  
  dish:FormGroup = new FormGroup({  
    ["dishName"]: new FormControl('', Validators.required),
    // ["ingredients0"]: new FormControl('', Validators.required), //just for now i'm taking it single but is should be an formArray, and must contain
    //formControl
    ["ingredients"]:new FormArray([new FormControl("",Validators.required)]),
    ["prep"]: new FormControl('', Validators.required),
  });


  //make FormGroup for dish
  makeFormGroupForDish(){
    this.dish =  new FormGroup({
      ["dishName"]: new FormControl('', Validators.required),
      ["ingredients"]: new FormArray([new FormControl("",Validators.required)]), //just for now i'm taking it single but is should be an formArray, and must contain
      //formControl
      ["prep"]: new FormControl('', Validators.required),
    });
  }

  //formgroup for chef
  chiefData = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    rollNo: new FormControl(null, Validators.required),
    dishes: new FormArray([this.dish]), //invoking form group of dish, dishes formArray will be an array of dish formGroup
    // dish:new FormControl('',Validators.required)
  });
  get dishes():FormArray{
    return this.chiefData.get('dishes') as FormArray;
  }
  ingredientsArr(pos:number):FormArray{
    return this.dishes.controls[pos].get("ingredients") as FormArray;
  }
  handleSubmit() {
    alert("Data submitted submitted successfully check console");
    console.log('working submit', this.chiefData.value);
    //reset the form
    this.chiefData.reset(); 
    console.log("Form has been reset");
  }
  handleRemoveDish(i:number){
    (<FormArray>this.chiefData.get("dishes")).removeAt(i);
    this.page=this.page-1;
  }
  addMoreDishes(){
    this.makeFormGroupForDish();
    (<FormArray>this.chiefData.get("dishes")).push(this.dish);
  }
  handleRemoveIng(pos:number,index:number){
    (<FormArray>(<FormArray>this.chiefData.get("dishes")).controls[pos].get("ingredients")).removeAt(index);
  }
  handleAddIng(pos:number){
    (<FormArray>(<FormArray>this.chiefData.get("dishes")).controls[pos].get("ingredients")).push(new FormControl("",Validators.required));

  }
  handlePageIncrease(){
    if(this.dishes.length>this.page){
      this.isFadedOut=false;
      this.fadeOut();
      this.page=this.page+1;
    }
  }
  handlePageDecrease(){
    if(this.page>0){
      this.isFadedOut=false;
      this.fadeOut();
      this.page=this.page-1;
    }
  }

  //this is fade out function ot handle the fade out thing
  fadeOut() {
    setTimeout(()=>{
      this.isFadedOut=true;
    },50)
  }
}

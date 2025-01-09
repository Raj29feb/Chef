import { Routes } from '@angular/router';
import { TestingComponent } from './composition_with_components/testing/testing.component';
import { Testing2Component } from './composition_with_components/testing2/testing2.component';
import { SignalComponent } from './signals/signal/signal.component';
import { BindingComponent } from './dataBinding-userInteraction-if-for/binding/binding.component';
import { InjectionComponent } from './dependency/injection/injection.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { NgIfNgForComponent } from './ng-if-ng-for/ng-if-ng-for.component';
import { DeferComponent } from './defer/defer.component';
import { OptimizeImageComponent } from './optimize-image/optimize-image.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ValidatingReactiveFormsComponent } from './validating-reactive-forms/validating-reactive-forms.component';
import { UsingServiceComponent } from './using-service/using-service.component';
import { ConstructorBasedDIComponent } from './constructor-based-di/constructor-based-di.component';
import { UsingPipesComponent } from './using-pipes/using-pipes.component';
import { ReactiveFormPractiseComponent } from './reactive-form-practise/reactive-form-practise.component';
import { FormArrayComponent } from './form-array/form-array.component';


export const routes: Routes = [
    {path:"",redirectTo:"/home",pathMatch:"full"},
    {path:"home",component:TestingComponent},
    {path:"testing2",component:Testing2Component},
    {path:"signal",component:SignalComponent},
    {path:"binding",component:BindingComponent},
    {path:"injection",component:InjectionComponent},
    {path:"input-output",component:InputOutputComponent},
    {path:"ngIf-ngFor",component:NgIfNgForComponent},
    {path:"defer",component:DeferComponent},
    {path:"images",component:OptimizeImageComponent},
    {path:"template-form",component:TemplateDrivenFormComponent},
    {path:"reactive-form",component:ReactiveFormsComponent},
    {path:"reactive-form-practise",component:ReactiveFormPractiseComponent},
    {path:"validation",component:ValidatingReactiveFormsComponent},
    {path:"usingService",component:UsingServiceComponent},
    {path:"constructor-based-di",component:ConstructorBasedDIComponent},
    {path:"usingPipes",component:UsingPipesComponent},
    {path:"form-array",component:FormArrayComponent}
];

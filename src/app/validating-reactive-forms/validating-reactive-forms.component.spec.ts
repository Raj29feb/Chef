import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatingReactiveFormsComponent } from './validating-reactive-forms.component';

describe('ValidatingReactiveFormsComponent', () => {
  let component: ValidatingReactiveFormsComponent;
  let fixture: ComponentFixture<ValidatingReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidatingReactiveFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidatingReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

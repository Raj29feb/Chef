import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormPractiseComponent } from './reactive-form-practise.component';

describe('ReactiveFormPractiseComponent', () => {
  let component: ReactiveFormPractiseComponent;
  let fixture: ComponentFixture<ReactiveFormPractiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormPractiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormPractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

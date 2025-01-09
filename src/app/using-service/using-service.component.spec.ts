import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingServiceComponent } from './using-service.component';

describe('UsingServiceComponent', () => {
  let component: UsingServiceComponent;
  let fixture: ComponentFixture<UsingServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsingServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

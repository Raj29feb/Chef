import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorBasedDIComponent } from './constructor-based-di.component';

describe('ConstructorBasedDIComponent', () => {
  let component: ConstructorBasedDIComponent;
  let fixture: ComponentFixture<ConstructorBasedDIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstructorBasedDIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructorBasedDIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

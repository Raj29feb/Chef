import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizeImageComponent } from './optimize-image.component';

describe('OptimizeImageComponent', () => {
  let component: OptimizeImageComponent;
  let fixture: ComponentFixture<OptimizeImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptimizeImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptimizeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

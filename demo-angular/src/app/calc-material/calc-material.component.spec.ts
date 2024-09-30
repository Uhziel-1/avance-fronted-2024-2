import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcMaterialComponent } from './calc-material.component';

describe('CalcMaterialComponent', () => {
  let component: CalcMaterialComponent;
  let fixture: ComponentFixture<CalcMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

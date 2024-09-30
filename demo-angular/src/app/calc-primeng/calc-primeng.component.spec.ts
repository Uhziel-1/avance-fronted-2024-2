import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcPrimengComponent } from './calc-primeng.component';

describe('CalcPrimengComponent', () => {
  let component: CalcPrimengComponent;
  let fixture: ComponentFixture<CalcPrimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcPrimengComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

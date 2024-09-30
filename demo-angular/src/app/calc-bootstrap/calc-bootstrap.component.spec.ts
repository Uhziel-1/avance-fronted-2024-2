import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcBootstrapComponent } from './calc-bootstrap.component';

describe('CalcBootstrapComponent', () => {
  let component: CalcBootstrapComponent;
  let fixture: ComponentFixture<CalcBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcBootstrapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

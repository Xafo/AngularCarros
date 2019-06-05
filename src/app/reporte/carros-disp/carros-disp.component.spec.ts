import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosDispComponent } from './carros-disp.component';

describe('CarrosDispComponent', () => {
  let component: CarrosDispComponent;
  let fixture: ComponentFixture<CarrosDispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosDispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

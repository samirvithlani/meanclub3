import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeechartComponent } from './employeechart.component';

describe('EmployeechartComponent', () => {
  let component: EmployeechartComponent;
  let fixture: ComponentFixture<EmployeechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeechartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

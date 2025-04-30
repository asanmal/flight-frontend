import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneTableComponent } from './drone-table.component';

describe('DroneTableComponent', () => {
  let component: DroneTableComponent;
  let fixture: ComponentFixture<DroneTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DroneTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroneTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

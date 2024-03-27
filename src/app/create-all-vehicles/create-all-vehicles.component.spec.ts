import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAllVehiclesComponent } from './create-all-vehicles.component';

describe('CreateAllVehiclesComponent', () => {
  let component: CreateAllVehiclesComponent;
  let fixture: ComponentFixture<CreateAllVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAllVehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAllVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

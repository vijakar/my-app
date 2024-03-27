import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindgingComponent } from './data-bindging.component';

describe('DataBindgingComponent', () => {
  let component: DataBindgingComponent;
  let fixture: ComponentFixture<DataBindgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindgingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

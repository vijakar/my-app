import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationProductsComponent } from './communication-products.component';

describe('CommunicationProductsComponent', () => {
  let component: CommunicationProductsComponent;
  let fixture: ComponentFixture<CommunicationProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicationProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

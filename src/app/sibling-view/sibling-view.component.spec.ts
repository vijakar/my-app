import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingViewComponent } from './sibling-view.component';

describe('SiblingViewComponent', () => {
  let component: SiblingViewComponent;
  let fixture: ComponentFixture<SiblingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

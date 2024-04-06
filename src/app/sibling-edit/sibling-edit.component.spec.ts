import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingEditComponent } from './sibling-edit.component';

describe('SiblingEditComponent', () => {
  let component: SiblingEditComponent;
  let fixture: ComponentFixture<SiblingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

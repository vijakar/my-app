import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingCreateComponent } from './sibling-create.component';

describe('SiblingCreateComponent', () => {
  let component: SiblingCreateComponent;
  let fixture: ComponentFixture<SiblingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

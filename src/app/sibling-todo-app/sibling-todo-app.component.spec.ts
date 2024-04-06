import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingTodoAppComponent } from './sibling-todo-app.component';

describe('SiblingTodoAppComponent', () => {
  let component: SiblingTodoAppComponent;
  let fixture: ComponentFixture<SiblingTodoAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingTodoAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingTodoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

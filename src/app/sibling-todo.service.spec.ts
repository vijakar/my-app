import { TestBed } from '@angular/core/testing';

import { SiblingTodoService } from './sibling-todo.service';

describe('SiblingTodoService', () => {
  let service: SiblingTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiblingTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

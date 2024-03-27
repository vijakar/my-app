import { TestBed } from '@angular/core/testing';

import { AllvehiclesService } from './allvehicles.service';

describe('AllvehiclesService', () => {
  let service: AllvehiclesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllvehiclesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

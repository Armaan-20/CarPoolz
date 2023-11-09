import { TestBed } from '@angular/core/testing';

import { UpdateRidesService } from './update-rides.service';

describe('UpdateRidesService', () => {
  let service: UpdateRidesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateRidesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

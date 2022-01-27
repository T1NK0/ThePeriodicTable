import { TestBed } from '@angular/core/testing';

import { AtomsService } from './atoms.service';

describe('AtomsService', () => {
  let service: AtomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

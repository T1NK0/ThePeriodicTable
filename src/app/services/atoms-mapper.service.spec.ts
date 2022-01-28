import { TestBed } from '@angular/core/testing';

import { AtomsMapperService } from './atoms-mapper.service';

describe('AtomsMapperService', () => {
  let service: AtomsMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtomsMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

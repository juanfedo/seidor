import { TestBed } from '@angular/core/testing';

import { SeidorUtilService } from './seidor-util.service';

describe('SeidorUtilService', () => {
  let service: SeidorUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeidorUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

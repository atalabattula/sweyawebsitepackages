import { TestBed } from '@angular/core/testing';

import { SitejobapplicationService } from './sitejobapplication.service';

describe('SitejobapplicationService', () => {
  let service: SitejobapplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SitejobapplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

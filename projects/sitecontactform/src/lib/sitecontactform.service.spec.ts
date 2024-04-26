import { TestBed } from '@angular/core/testing';

import { SitecontactformService } from './sitecontactform.service';

describe('SitecontactformService', () => {
  let service: SitecontactformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SitecontactformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

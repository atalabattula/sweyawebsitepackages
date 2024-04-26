import { TestBed } from '@angular/core/testing';

import { BacktotopbuttonService } from './backtotopbutton.service';

describe('BacktotopbuttonService', () => {
  let service: BacktotopbuttonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BacktotopbuttonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FinraService } from './finra.service';

describe('FinraService', () => {
  let service: FinraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

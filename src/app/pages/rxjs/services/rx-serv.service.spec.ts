import { TestBed } from '@angular/core/testing';

import { RxServService } from './rx-serv.service';

describe('RxServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RxServService = TestBed.get(RxServService);
    expect(service).toBeTruthy();
  });
});

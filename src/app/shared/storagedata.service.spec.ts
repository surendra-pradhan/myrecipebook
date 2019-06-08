import { TestBed } from '@angular/core/testing';

import { StoragedataService } from './storagedata.service';

describe('StoragedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoragedataService = TestBed.get(StoragedataService);
    expect(service).toBeTruthy();
  });
});

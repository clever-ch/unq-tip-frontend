import { TestBed } from '@angular/core/testing';

import { PrestacionService } from './prestacion.service';

describe('PrestacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrestacionService = TestBed.get(PrestacionService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PoIconsService } from './po-icons.service';

describe('PoIconsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoIconsService = TestBed.get(PoIconsService);
    expect(service).toBeTruthy();
  });
});

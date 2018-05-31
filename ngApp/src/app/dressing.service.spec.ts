import { TestBed, inject } from '@angular/core/testing';

import { DressingService } from './dressing.service';

describe('DressingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DressingService]
    });
  });

  it('should be created', inject([DressingService], (service: DressingService) => {
    expect(service).toBeTruthy();
  }));
});

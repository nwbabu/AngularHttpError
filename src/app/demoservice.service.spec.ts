import { TestBed, inject } from '@angular/core/testing';

import { DemoserviceService } from './demoservice.service';

describe('DemoserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemoserviceService]
    });
  });

  it('should be created', inject([DemoserviceService], (service: DemoserviceService) => {
    expect(service).toBeTruthy();
  }));
});

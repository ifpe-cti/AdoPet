import { TestBed, inject } from '@angular/core/testing';

import { AnimalService } from './animal.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimalService]
    });
  });

  it('should be created', inject([AnimalService], (service: AnimalService) => {
    expect(service).toBeTruthy();
  }));
});
import { TestBed, inject } from '@angular/core/testing';

import { AdocaoService } from './adocao.service';

describe('AdocaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdocaoService]
    });
  });

  it('should be created', inject([AdocaoService], (service: AdocaoService) => {
    expect(service).toBeTruthy();
  }));
});

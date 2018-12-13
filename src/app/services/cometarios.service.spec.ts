import { TestBed, inject } from '@angular/core/testing';

import { CometariosService } from './cometarios.service';

describe('CometariosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CometariosService]
    });
  });

  it('should be created', inject([CometariosService], (service: CometariosService) => {
    expect(service).toBeTruthy();
  }));
});

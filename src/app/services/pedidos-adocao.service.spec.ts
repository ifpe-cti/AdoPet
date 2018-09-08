import { TestBed, inject } from '@angular/core/testing';

import { PedidosAdocaoService } from './pedidos-adocao.service';

describe('PedidosAdocaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PedidosAdocaoService]
    });
  });

  it('should be created', inject([PedidosAdocaoService], (service: PedidosAdocaoService) => {
    expect(service).toBeTruthy();
  }));
});

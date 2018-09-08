import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosAdocaoComponent } from './pedidos-adocao.component';

describe('PedidosAdocaoComponent', () => {
  let component: PedidosAdocaoComponent;
  let fixture: ComponentFixture<PedidosAdocaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosAdocaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosAdocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

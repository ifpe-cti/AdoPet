import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusPedidosAdocaoComponent } from './meus-pedidos-adocao.component';

describe('MeusPedidosAdocaoComponent', () => {
  let component: MeusPedidosAdocaoComponent;
  let fixture: ComponentFixture<MeusPedidosAdocaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusPedidosAdocaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusPedidosAdocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

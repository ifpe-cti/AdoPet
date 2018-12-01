import { PedidosAdocao } from './../../model/PedidosAdocao';
import { Component, OnInit } from '@angular/core';
import { PedidosAdocaoService } from '../../services/pedidos-adocao.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-meus-pedidos-adocao',
  templateUrl: './meus-pedidos-adocao.component.html',
  styleUrls: ['./meus-pedidos-adocao.component.css']
})
export class MeusPedidosAdocaoComponent implements OnInit {
  listaDePedidos: any[] = [];
  cols: any[];
  status: string;
  pedido: PedidosAdocao;

  constructor(private pedidosService: PedidosAdocaoService, private authService: AuthService) { }

  ngOnInit() {
    this.listar();
    this.cols = [
      { field: 'nome', header: 'Nome do animal' },
      { field: 'idUsuario', header: 'Dono' },
    ]
  }
  listar(){
    this.pedidosService.listarPorIdUsuario(this.authService.getUsuarioLogado()).subscribe(listaDePedidos => {
      this.listaDePedidos = listaDePedidos;
    });
  }
  verificaStatus(){
    
  }

}
import { PedidosAdocao } from './../../model/PedidosAdocao';
import { PedidosAdocaoService } from './../../services/pedidos-adocao.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pedidos-adocao',
  templateUrl: './pedidos-adocao.component.html',
  styleUrls: ['./pedidos-adocao.component.css']
})
export class PedidosAdocaoComponent implements OnInit {
  listaDePedidos: any[] = [];
  cols: any[];
  pedido: PedidosAdocao;

  constructor(private pedidosService: PedidosAdocaoService) { }

  ngOnInit() {
    this.listar();
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'idUsuarioPedido', header: 'Usuário' }
    ]
  }
  listar(){
    this.pedidosService.listar().subscribe(listaDePedidos =>{
      this.listaDePedidos = listaDePedidos;
    });
  }
  aceitar(){
    //aceitou o pedido, faz o que?
    alert("ok");
  }
  rejeitar(){
    this.pedidosService.remover(this.pedido)
  }

}

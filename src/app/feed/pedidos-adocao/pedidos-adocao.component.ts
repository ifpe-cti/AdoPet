import { PedidosAdocaoService } from './../../services/pedidos-adocao.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../../model/Animal';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-pedidos-adocao',
  templateUrl: './pedidos-adocao.component.html',
  styleUrls: ['./pedidos-adocao.component.css']
})
export class PedidosAdocaoComponent implements OnInit {
  listaDePedidos: any[] = [];
  cols: any[];
  animalSelecionado: Animal;

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
    alert("ok");
  }
  apagar(){
   // this.pedidosService.apagar(animal);
   alert("n ta pegando");
  }

}

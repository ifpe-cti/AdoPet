import { AnimalService } from './../../services/animal.service';
import { PedidosAdocao } from './../../model/PedidosAdocao';
import { PedidosAdocaoService } from './../../services/pedidos-adocao.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../../model/Animal';

@Component({
  selector: 'app-pedidos-adocao',
  templateUrl: './pedidos-adocao.component.html',
  styleUrls: ['./pedidos-adocao.component.css']
})
export class PedidosAdocaoComponent implements OnInit {
  animal: Animal;
  pedido: any;
  id: string;
  cols: any[] = [];
  listaDePedidos: any[] = [];

  constructor(private pedidosService: PedidosAdocaoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.listar();
    this.cols = [
      { field: 'nomeUsuario', header: 'Usuário' },
      { field: 'status', header: 'Status' }
    ]; 
  }
  listar(){
    this.pedidosService.listarPorIdAnimal(this.animal.id).subscribe(listaDePedidos => {
      this.listaDePedidos = listaDePedidos;
    });
  }
  
 
}
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

  constructor(private pedidoService: PedidosAdocaoService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.listar();
      }
    );
  }
  listar() {
    this.pedidoService.listarPorIdAnimal(this.id).subscribe(listaDePedidos => {
      this.listaDePedidos = listaDePedidos;
      for (let i = 0; i < this.listaDePedidos.length; i++) {
        this.pedidoService.getStatus(this.listaDePedidos[i].id).subscribe(status => {
          this.listaDePedidos[i].status = status;
        });
      }
    });
  }
}
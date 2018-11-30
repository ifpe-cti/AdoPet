import { PedidosAdocao } from './../../model/PedidosAdocao';
import { PedidosAdocaoService } from './../../services/pedidos-adocao.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedidos-adocao',
  templateUrl: './pedidos-adocao.component.html',
  styleUrls: ['./pedidos-adocao.component.css']
})
export class PedidosAdocaoComponent implements OnInit {
  pedido: any;
  id: any;

  constructor(private pedidosService: PedidosAdocaoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params ['id'];
      }
    );
    this.pedido = this.pedidosService.listarPorIdAnimal(this.id).subscribe(
      resultadoObserverble => {
        this.pedido = resultadoObserverble;
      }) 
  }
 
}
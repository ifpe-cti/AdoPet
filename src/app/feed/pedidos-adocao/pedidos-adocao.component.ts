import { PedidosAdocao } from './../../model/PedidosAdocao';
import { AdocaoService } from './../../services/adocao.service';
import { PedidosAdocaoService } from './../../services/pedidos-adocao.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../../model/Animal';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-pedidos-adocao',
  templateUrl: './pedidos-adocao.component.html',
  styleUrls: ['./pedidos-adocao.component.css']
})
export class PedidosAdocaoComponent implements OnInit {
  animal: Animal;
  pedido: PedidosAdocao;
  id: string;
  cols: any[] = [];
  listaDePedidos: any[] = [];
  msgs: Message[];

  constructor(private pedidoService: PedidosAdocaoService, private route: ActivatedRoute,
    private adocaoService: AdocaoService) {
    this.pedido = new PedidosAdocao;
  }

  statusDeAdocao() {
    this.pedidoService.listarPorIdAnimal(this.id).subscribe(result => {
      result.map(documents => {
        this.pedidoService.getStatus(this.id).subscribe(status => {
          this.pedido.status = status;
        })
      })
    });
    console.log('status' + status)
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.listar();
        this.statusDeAdocao();
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
  permitirAdocao(pedido) {
    this.adocaoService.salvar(pedido.id).then(() => {
      this.showSuccess()
      //chama o método de status pra atualizar
    }).catch(error => {
      this.showError()
      console.error(error);
    })
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: "success", summary: 'Adoção permitida', detail: 'Status do animal: Adotado' });
  }
  showError() {
    this.msgs = [];
    this.msgs.push({ severity: "error", summary: 'Erro ao permitir adoção' });
  }
}
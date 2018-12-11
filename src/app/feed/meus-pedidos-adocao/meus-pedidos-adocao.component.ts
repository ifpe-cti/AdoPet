import { AnimalService } from './../../services/animal.service';
import { PedidosAdocao } from './../../model/PedidosAdocao';
import { Component, OnInit } from '@angular/core';
import { PedidosAdocaoService } from '../../services/pedidos-adocao.service';
import { AuthService } from '../../services/auth.service';
import { UsuarioService } from '../../services/usuario.service';
import { AdocaoService } from '../../services/adocao.service';
import { Adocao } from '../../model/Adocao';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meus-pedidos-adocao',
  templateUrl: './meus-pedidos-adocao.component.html',
  styleUrls: ['./meus-pedidos-adocao.component.css']
})
export class MeusPedidosAdocaoComponent implements OnInit {
  listaDePedidos: any[] = [];
  status: string;
  pedido: PedidosAdocao;
  adocoes: Adocao[];
  id: string;

  constructor(private pedidosService: PedidosAdocaoService, private usuarioService: UsuarioService,
    private authService: AuthService, private animalService: AnimalService,
    private adocaoService: AdocaoService, private route: ActivatedRoute) {
    this.pedido = new PedidosAdocao;
  }

  ngOnInit() {
    this.carregarAdocoes();
  }

  getUsuario() {
    let texto: string;
    this.usuarioService.listarUsuario(this.id).subscribe(resultado => {
      texto = resultado.displayName;
    });
    return texto;
  }
  private carregarAdocoes() {
    this.adocaoService.listarTodosAdocao()
      .toPromise()
      .then(lista => {
        this.adocoes = lista;
        this.carregarPedidos();
      });
  }
  private carregarPedidos() {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.listar();
      });
  }

  listar() {
    this.pedidosService.listarPorIdUsuario(this.authService.getUsuarioLogado()).subscribe(listaDePedidos => {
      this.listaDePedidos = listaDePedidos;
      for (let i = 0; i < this.listaDePedidos.length; i++) {
        this.animalService.listarId(this.listaDePedidos[i].idAnimal).subscribe(animal => {
          this.listaDePedidos[i].animal = animal;
        });
      }
      this.listaDePedidos.forEach(pedido => {
        const adocoes = this.adocoes.filter(a => a.idPedido === pedido.id);
        pedido['status'] = adocoes.length !== 0 ? 'Adotado' : 'Pendente';
      });
    });
  }
}
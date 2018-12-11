import { PedidosAdocao } from './../../model/PedidosAdocao';
import { AuthService } from './../../services/auth.service';
import { AnimalService } from './../../services/animal.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../../model/Animal';
import { Usuario } from '../../model/Usuario';
import { AdocaoService } from '../../services/adocao.service';
import { Adocao } from '../../model/Adocao';
import { ActivatedRoute } from '@angular/router';
import { PedidosAdocaoService } from '../../services/pedidos-adocao.service';

@Component({
  selector: 'app-meus-animais',
  templateUrl: './meus-animais.component.html',
  styleUrls: ['./meus-animais.component.css']
})
export class MeusAnimaisComponent implements OnInit {
  displayDialog: boolean;
  animal: Animal;
  id: string;
  cols: any[];
  listaDeAnimais: any[] = [];
  usuario: Usuario;
  adocoes: Adocao[];
  pedidos: PedidosAdocao[];

  constructor(private animalService: AnimalService, private route: ActivatedRoute,
    private authService: AuthService, private adocaoService: AdocaoService, private pedidosService: PedidosAdocaoService) { }

  ngOnInit() {
    this.carregarPedidos();
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'tipo', header: 'Tipo' }
    ]
  }
  listar() {
    this.animalService.listarPorIdUsuario(this.authService.getUsuarioLogado()).subscribe(listaDeAnimais => {
      this.listaDeAnimais = listaDeAnimais;
      this.listaDeAnimais.forEach(animal => animal['status'] = this.possuiAdocao(animal) ? 'Adotado' : 'Pendente');
    });
  }

  private possuiAdocao(animal: Animal) {
    let possuiAdocao = false;
    const pedidos = this.pedidos.filter(p => p.idAnimal === animal.id);
    if (pedidos.length > 0 && this.adocoes.length > 0) {
      possuiAdocao = this.adocoes.some(a => pedidos.some(p => p.id === a.idPedido));
    }
    return possuiAdocao;
  }

  private carregarPedidos() {
    this.pedidosService.listar()
        .toPromise()
        .then(lista => {
          this.pedidos = lista;
          this.carregarAdocoes();
        });
  }

  private carregarAdocoes() {
    this.adocaoService.listarTodosAdocao()
        .toPromise()
        .then(lista => {
          this.adocoes = lista;
          this.carregarAnimais();
        });
  }

  private carregarAnimais() {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.listar();
      });
  }  
}
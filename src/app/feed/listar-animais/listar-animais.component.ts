import { Component, OnInit } from '@angular/core';
import { Animal } from './../../model/Animal';
import { AnimalService } from '../../services/animal.service';
import { AdocaoService } from '../../services/adocao.service';
import { Adocao } from '../../model/Adocao';

@Component({
  selector: 'app-listar-animais',
  templateUrl: './listar-animais.component.html',
  styleUrls: ['./listar-animais.component.css']
})
export class ListarAnimaisComponent implements OnInit {
  animal: Animal;
  animais: Animal[];
  listaDeAnimais: any[] = [];
  adocoes: Adocao[];

  constructor(private animalService: AnimalService, private adocaoService: AdocaoService) { }

  ngOnInit() {
    this.carregarAnimais();
  }

  private carregarAnimais() {
    this.animalService.listarTodos()
      .toPromise()
      .then(listaDeAnimais => {
        this.listaDeAnimais = listaDeAnimais;
        this.carregarAdocoes();
      });
  }
  private carregarAdocoes() {
    this.adocaoService.listarTodosAdocao()
      .toPromise()
      .then(lista => {
        this.adocoes = lista;
      });
  }
  listar() {
    this.animalService.listarTodos().subscribe(listaDeAnimais => {
      this.listaDeAnimais = listaDeAnimais;
    });
  }
}
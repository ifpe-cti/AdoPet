import { Component, OnInit } from '@angular/core';
import { AnimalService } from './../../animal.service';
import { Animal } from './../../model/Animal';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-listar-animais',
  templateUrl: './listar-animais.component.html',
  styleUrls: ['./listar-animais.component.css']
})
export class ListarAnimaisComponent implements OnInit {
  itens: MenuItem[];
  animalSelecionado;
  animais: Animal[];
  listaDeAnimais:any[] = [];

  constructor(private animalService: AnimalService) {}
  
  
  ngOnInit() {
    this.listar();
    this.itens = [
      {label: 'Detalhe', icon: 'fa-close', command: (event) => this.detalhe(this.animalSelecionado)}
    ]
  }
  listar(){
    this.animalService.listar().subscribe(listaDeAnimais=>{
      this.listaDeAnimais = listaDeAnimais;
    });
  }
  detalhe(animal){
      
  }
}

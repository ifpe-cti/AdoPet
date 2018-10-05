import { AnimalService } from './../../services/animal.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../../model/Animal';
import { Usuario } from '../../model/Usuario';

@Component({
  selector: 'app-meus-animais',
  templateUrl: './meus-animais.component.html',
  styleUrls: ['./meus-animais.component.css']
})
export class MeusAnimaisComponent implements OnInit {
  displayDialog: boolean;
  animal: Animal;
  cols: any[];
  animalSelecionado: Animal;
  listaDeAnimais: any[] = [];
  usuario: Usuario;

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.listar();
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'tipo', header: 'Tipo' },
      { field: 'idade', header: 'Idade' },
      { field: 'sexo', header: 'Sexo' },      
      { field: 'porte', header: 'Porte' },
      { field: 'cor', header: 'Cor' }
    ]
  }
  listar() {
    this.animalService.listarPorIdUsuario(this.usuario).subscribe(listaDeAnimais => {
      this.listaDeAnimais = listaDeAnimais;
    });
  }
  atualizar() {
    if (this.animal.id != undefined)
      this.animalService.atualizarAnimal(this.animal).then(() => {
        this.listar();
        this.animal = null;
        this.displayDialog = false;
      });
  }
  apagar() {
    this.animalService.delete(this.animalSelecionado).then(() => {
      this.listar();
      this.animal = null;
      this.displayDialog = false;
    });
  }
  onRowSelect(event) {
    console.log(event.data)
    this.animal = this.cloneAnimal(event.data);
    this.displayDialog = true;
  }
  cloneAnimal(animal: Animal): Animal {
    let a = { nome: " ", tipo: " ", sexo: " ", cor: " ", idade: "", porte: " ", descricao: " " };
    for (let prop in a) {
       a[prop] = animal[prop];
    }
    
    a["id"] = animal.id;
    
      return a;
  }
}
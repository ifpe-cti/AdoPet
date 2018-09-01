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
  animais: Animal[];
  cols: any[];
  animalSelecionado: Animal;
  listaDeAnimais: any[] = [];
  usuario: Usuario;

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.listar();
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'idade', header: 'Idade' },
      { field: 'tipo', header: 'Tipo' },
      { field: 'porte', header: 'Porte' },
      { field: 'cor', header: 'Cor' }
    ]
  }
  listar() {
    this.animalService.listarPorIdUsuario(this.usuario).subscribe(listaDeAnimais => {
      this.listaDeAnimais = listaDeAnimais;
    });
  }

 
  atualizar(){
    if(this.animal.id != undefined)
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
    this.animal = this.cloneAnimal(event.data);
    this.displayDialog = true;
}
  cloneAnimal(animal: Animal): Animal {
    let a = {nome:" ", tipo: " ", sexo: " ", cor: " ", idade: "", porte: " ", descrição: " "};
    for (let prop in a) {
        animal[prop] = a[prop];
    }
    if(animal.id != undefined)
      animal["id"] = animal.id;
    return animal;
  }
}
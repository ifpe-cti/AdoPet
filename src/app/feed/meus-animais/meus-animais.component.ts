import { AnimalService } from './../../services/animal.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../../model/Animal';

@Component({
  selector: 'app-meus-animais',
  templateUrl: './meus-animais.component.html',
  styleUrls: ['./meus-animais.component.css']
})
export class MeusAnimaisComponent implements OnInit {
  displayDialog: boolean;
  animal: Animal;
  novoAnimal: boolean;
  animais: Animal[];
  cols: any[];
  animalSelecionado: Animal;
  listaDeAnimais: any[] = [];

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
    this.animalService.listar().subscribe(listaDeAnimais => {
      this.listaDeAnimais = listaDeAnimais;
    });
  }

  showDialogToAdd() {
    this.novoAnimal = true;
    this.animal;
    this.displayDialog = true;
}
  salvar(){
    if(this.novoAnimal)
      this.animalService.atualizarAnimal(this.animalSelecionado.id);    
    this.animal = null;
    this.displayDialog = false;
  }  
  apagar() {  
    this.animalService.delete(this.animalSelecionado);
    this.animal = null;
    this.displayDialog = false;
}
onRowSelect(event) {
    this.novoAnimal = false;
    this.animal = this.cloneAnimal(event.data);
    this.displayDialog = true;
}
cloneAnimal(a: Animal): Animal {
    let animal = {nome:" ", tipo: " ", sexo: " ", cor: " ", idade: "", porte: " ", descrição: " "};
    for (let prop in a) {
        animal[prop] = a[prop];
    }
    return animal;
}

}

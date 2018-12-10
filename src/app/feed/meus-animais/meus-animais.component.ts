import { AuthService } from './../../services/auth.service';
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
  listaDeAnimais: any[] = [];
  usuario: Usuario;

  constructor(private animalService: AnimalService, private authService: AuthService) { }

  ngOnInit() {
    this.listar();
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'tipo', header: 'Tipo' }
    ]
  }
  listar() {
    this.animalService.listarPorIdUsuario(this.authService.getUsuarioLogado()).subscribe(listaDeAnimais => {
      this.listaDeAnimais = listaDeAnimais;
    });
  }
  
  onRowSelect(event){
    console.log(event.data)
    this.animal = this.cloneAnimal(event.data);
    this.displayDialog = true;
  }
  cloneAnimal(animal: Animal): Animal {
    let a = {idade: " ", porte: " ", descricao: " ", nome: " ", tipo: " ", sexo: " ", cor: " "};
    for (let prop in a) {
      a[prop] = animal[prop];
    }
    a["id"] = animal.id;
    return a;
  }
  atualizar() {
    if (this.animal.id != undefined)
      this.animalService.atualizarAnimal(this.animal).then(() => {
        this.listar();
        this.animal = null;
      });
  }
  apagar() {
    this.animalService.delete(this.animal).then(() => {
      this.listar();
      this.animal = null;
    });
  }
}
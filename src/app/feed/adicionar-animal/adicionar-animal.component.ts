import { Component, OnInit } from '@angular/core';
import { Animal } from '../../model/Animal';
import { Router } from '@angular/router';
import { Message } from 'primeng/components/common/api';
import {TableModule} from 'primeng/table';
import { AnimalService } from '../../services/animal.service';


@Component({
  selector: 'app-adicionar-animal',
  templateUrl: './adicionar-animal.component.html',
  styleUrls: ['./adicionar-animal.component.css']
})
export class AdicionarAnimalComponent implements OnInit {
  animal: Animal;
	msgs: Message[];


  constructor(private animalService: AnimalService, private route: Router) { 
    this.animal = {nome:" ", tipo: " ", sexo: " ", cor: " ", idade: 0, porte: " ", descrição: " "};
    this.msgs = [];    
  }

  ngOnInit() {
    this.animalService.listar();

  }
  salvar(animal: Animal){
    if(this.animal.nome == " " && this.animal.tipo == " " && this.animal.sexo == " " && this.animal.cor == " " && this.animal.idade == 0 && this.animal.descrição == " "){
      this.showError();
      
    }else{
      this.animalService.salvar(this.animal);
      this.route.navigate(['feed/listar-animais']);
   }
  }
  showError() {
  this.msgs = [];
  this.msgs.push({severity:'error', summary:'Erro', detail:'Preencha os dados corretamente'});
  }

}

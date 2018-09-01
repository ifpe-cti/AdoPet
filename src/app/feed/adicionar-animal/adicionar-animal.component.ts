import { SelectItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../../model/Animal';
import { Router } from '@angular/router';
import { Message } from 'primeng/components/common/api';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-adicionar-animal',
  templateUrl: './adicionar-animal.component.html',
  styleUrls: ['./adicionar-animal.component.css']
})
export class AdicionarAnimalComponent implements OnInit {
  animal: Animal;
  msgs: Message[];
  tipoDeAnimal: SelectItem[];
  idade: SelectItem[];
  sexo: SelectItem[];
  porte: SelectItem[];

  constructor(private animalService: AnimalService, private route: Router) { 
    this.animal = {nome:" ", tipo: " ", sexo: " ", cor: " ", idade: "", porte: " ", descrição: " "};
    this.msgs = [];  
    this.tipoDeAnimal = [
      {label: 'Selecione', value: null},
      {label: 'Cachorro', value: 'Cachorro'},
      {label: 'Gato', value: 'Gato'},
    ];
    this.idade = [
      {label: 'Selecione', value: null},
      {label: 'Filhote', value: 'Filhote'},
      {label: 'Adulto', value: 'Adulto'},
    ];
    this.sexo = [
      {label: 'Selecione', value: null},
      {label: 'Fêmea', value: 'Femea'},
      {label: 'Macho', value: 'Macho'},
    ];
    this.porte = [
      {label: 'Selecione', value: null},
      {label: 'Pequeno', value: 'Pequeno'},
      {label: 'Médio', value: 'Médio'},
      {label: 'Grande', value: 'Grande'},
    ]
  }

  ngOnInit() {
    //this.animalService.listarTodos();

  }
  salvar(){
    if(this.animal.nome == "" || this.animal.tipo == "" || this.animal.sexo == "" || this.animal.cor == "" || this.animal.idade == "" || this.animal.descrição == ""){
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

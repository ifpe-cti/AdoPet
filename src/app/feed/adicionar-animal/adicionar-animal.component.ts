/*The MIT License (MIT)

Copyright (c) 2018 Emely Melo e Eva Vict�ria

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */
import { Component, OnInit } from '@angular/core';
import { Animal } from '../../model/Animal';
import { AnimalService } from '../../animal.service';
import { Router } from '@angular/router';
import { Message } from 'primeng/components/common/api';


@Component({
  selector: 'app-adicionar-animal',
  templateUrl: './adicionar-animal.component.html',
  styleUrls: ['./adicionar-animal.component.css']
})
export class AdicionarAnimalComponent implements OnInit {
  animal: Animal;
	msgs: Message[];


  constructor(private animalService: AnimalService, private route: Router) { 
    this.animal = {nome:" ", tipo: " ", sexo: " ", cor: " ", idade: " ", descrição: " "};
    this.msgs = [];
  }

  ngOnInit() {
    this.animalService.getAnimal();

  }
  salvar(animal: Animal){
    if(this.animal.nome == " " && this.animal.tipo == " " && this.animal.sexo == " " && this.animal.cor == " " && this.animal.idade == " " && this.animal.descrição == " "){
      this.showError();
      
    }else{
      this.animalService.salvar(this.animal);
      this.route.navigate(['/feed']);
   }
  }
  showError() {
  this.msgs = [];
  this.msgs.push({severity:'error', summary:'Erro', detail:'Preencha os dados corretamente'});
  }

}

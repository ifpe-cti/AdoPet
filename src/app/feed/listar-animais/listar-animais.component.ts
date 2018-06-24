import { Component, OnInit } from '@angular/core';
import { AnimalService } from './../../animal.service';
import { Animal } from './../../model/Animal';

@Component({
  selector: 'app-listar-animais',
  templateUrl: './listar-animais.component.html',
  styleUrls: ['./listar-animais.component.css']
})
export class ListarAnimaisComponent implements OnInit {
  cols: any[];
  selecionar: Animal;
  animais: Animal[];

  constructor(private animalService: AnimalService) {}
  
  
  ngOnInit() {
    this.animalService.getAnimal();
    this.cols = [
      {field: 'nome', header: 'Nome'}, 
      {field: 'idade', header: 'Idade'}, 
    ]
  }

}

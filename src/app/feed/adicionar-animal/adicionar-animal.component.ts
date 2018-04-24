import { Component, OnInit } from '@angular/core';
import { Animal } from '../../model/Animal';
import { AnimalService } from '../../animal.service';

@Component({
  selector: 'app-adicionar-animal',
  templateUrl: './adicionar-animal.component.html',
  styleUrls: ['./adicionar-animal.component.css']
})
export class AdicionarAnimalComponent implements OnInit {
  animal: Animal;

  constructor(private animalService: AnimalService) { 
    this.animal = {nome:" ", tipo: " ", sexo: " ", cor: " ", faixaEtaria: " ", descrição: " "};
  }

  ngOnInit() {
    this.animalService.getAnimal();

  }
  salvar(){
    console.log("ooi");
  }

}

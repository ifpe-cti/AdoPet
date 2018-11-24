import { Component, OnInit } from '@angular/core';
import { Animal } from './../../model/Animal';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-listar-animais',
  templateUrl: './listar-animais.component.html',
  styleUrls: ['./listar-animais.component.css']
})
export class ListarAnimaisComponent implements OnInit {
  animal: Animal;
  animais: Animal[];
  listaDeAnimais: any[] = [];

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.listar();
  }
  listar() {
    this.animalService.listarTodos().subscribe(listaDeAnimais => {
      this.listaDeAnimais = listaDeAnimais;
    });
  }  
}
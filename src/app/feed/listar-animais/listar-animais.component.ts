import { Component, OnInit } from '@angular/core';
import { AnimalService } from './../../animal.service';


@Component({
  selector: 'app-listar-animais',
  templateUrl: './listar-animais.component.html',
  styleUrls: ['./listar-animais.component.css']
})
export class ListarAnimaisComponent implements OnInit {
 

  constructor(private animalService: AnimalService) { }
  
  
  ngOnInit() {
    this.animalService.getAnimal();
  }

}

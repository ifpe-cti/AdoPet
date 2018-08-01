import { AnimalService } from './../../services/animal.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../../model/Animal';

@Component({
  selector: 'app-visualizar-animal',
  templateUrl: './visualizar-animal.component.html',
  styleUrls: ['./visualizar-animal.component.css']
})
export class VisualizarAnimalComponent implements OnInit {
  animal:Animal;
  id: string;
  constructor(private route : ActivatedRoute, private animalService: AnimalService) { 
    }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params ['id'];
      }
    );
  }

  adotar(){
    alert("Adotado");
  }

}

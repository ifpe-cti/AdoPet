import { Router } from '@angular/router';
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
  animal;
  id: string;
  constructor(private route : ActivatedRoute, private animalService: AnimalService, private rota: Router) {
    }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params ['id'];
      }
    );
    this.animal = this.animalService.listarId(this.id).subscribe(
      resultadoObserverble => {
        this.animal = resultadoObserverble;
      }
    ) 
  }
  adotar(){
    console.log("adotado");
    //this.rota.navigate(['feed/listar-animais']);
  }

}

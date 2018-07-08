import { Component, OnInit } from '@angular/core';
import { Animal } from './../../model/Animal';
import { MenuItem } from 'primeng/api';
import { Router, RouterLink } from '@angular/router';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-listar-animais',
  templateUrl: './listar-animais.component.html',
  styleUrls: ['./listar-animais.component.css']
})
export class ListarAnimaisComponent implements OnInit {
  animal: Animal;
  itens: MenuItem[];
  animalSelecionado;
  animais: Animal[];
  listaDeAnimais:any[] = [];

  constructor(private animalService: AnimalService, private route: Router) {}
  
  
  ngOnInit() {
    this.listar();
    
  }
  listar(){
    this.animalService.listar().subscribe(listaDeAnimais=>{
      this.listaDeAnimais = listaDeAnimais;
    });
  }
  detalhe(){
    this.route.navigate(['feed/visualizar-animal']);
  }
 
}

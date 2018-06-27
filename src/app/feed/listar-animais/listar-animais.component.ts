import { Component, OnInit } from '@angular/core';
import { AnimalService } from './../../animal.service';
import { Animal } from './../../model/Animal';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-animais',
  templateUrl: './listar-animais.component.html',
  styleUrls: ['./listar-animais.component.css']
})
export class ListarAnimaisComponent implements OnInit {
  itens: MenuItem[];
  animalSelecionado;
  animais: Animal[];
  listaDeAnimais:any[] = [];

  constructor(private animalService: AnimalService, private rota:Router) {}
  
  
  ngOnInit() {
    this.listar();
    
  }
  listar(){
    this.animalService.listar().subscribe(listaDeAnimais=>{
      this.listaDeAnimais = listaDeAnimais;
    });
  }
  detalhe(){
    alert("pegou");
  }
 
}

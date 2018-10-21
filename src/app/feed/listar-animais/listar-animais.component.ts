import { Component, OnInit } from '@angular/core';
import { Animal } from './../../model/Animal';
import { MenuItem } from 'primeng/api';
import { Router, RouterLink } from '@angular/router';
import { AnimalService } from '../../services/animal.service';
import { Usuario } from '../../model/Usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-listar-animais',
  templateUrl: './listar-animais.component.html',
  styleUrls: ['./listar-animais.component.css']
})
export class ListarAnimaisComponent implements OnInit {
  animal: Animal;
  animais: Animal[];
  listaDeAnimais: any[] = [];

  constructor(private animalService: AnimalService, private route: Router) {
      }


  ngOnInit() {
    this.listar();

  }
  listar() {
    this.animalService.listarTodos().subscribe(listaDeAnimais => {
      this.listaDeAnimais = listaDeAnimais;
    });
  }
  
}

import { Usuario } from './../../model/Usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario: Usuario;
  
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  salvar(){

  }
}

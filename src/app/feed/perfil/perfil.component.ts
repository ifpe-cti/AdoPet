import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../model/Usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario: Usuario
  id: string;
  listaDeUsuarios: {};
  constructor(private usuarioService: UsuarioService) {
    this.usuario = { nome:" ", email: " ", senha: " ", $id:" "}

  }

  ngOnInit() {
    //this.listar();
    let myItem = localStorage.getItem(this.usuarioService.getUsuarioId);
    //this.usuario = this.usuarioService.listarUsuario(this.usuarioService.getUsuarioId);

  }
  listar() {
    this.usuarioService.listarUsuario(this.usuario);
    console.log("entrou")
  }


  salvar() {
    console.log(this.usuarioService.getUsuarioId);
    // this.usuarioService.atualizarUsuario(this.auguard.getUsuario);
  }
}

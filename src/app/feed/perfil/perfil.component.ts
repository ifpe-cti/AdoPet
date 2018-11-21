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
  
  constructor(private usuarioService: UsuarioService) {


  }

  ngOnInit() {
    //this.listar();


  }
  listar() {
    this.usuarioService.listarUsuario(localStorage.getItem("idUsuario")).subscribe(usuarioCarregado => {
      console.log(usuarioCarregado);
      this.usuario = usuarioCarregado;
      console.log("entrou")
    });
    //this.usuarioService.listarUsuario(this.usuario.$id);
    // console.log("entrou")
  }


  salvar() {
    console.log(this.usuarioService.getUsuarioId);
    // this.usuarioService.atualizarUsuario(this.auguard.getUsuario);
  }

  cloneUsuaio(usuario: Usuario): Usuario {
    let user = { nome: " ", email: " " , senha: ""};
    for (let prop in user) {
      user[prop] = usuario[prop];
    }
    user["id"] = usuario.$id;

    return user;
  }
}

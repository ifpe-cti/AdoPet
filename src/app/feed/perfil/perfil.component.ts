import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioCadastro } from '../../model/UsuarioCadastro';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuarioCadastro: UsuarioCadastro
  id: string;
  listaDeUsuarios: {};
  constructor(private usuarioService: UsuarioService) {
    this.usuarioCadastro = { nome:" ", email: " ", senha: " ", $id:null}

  }

  ngOnInit() {
    //this.listar();
    let myItem = localStorage.getItem(this.usuarioService.getUsuarioId);
    //this.usuario = this.usuarioService.listarUsuario(this.usuarioService.getUsuarioId);

  }
  listar() {
    this.usuarioService.listarUsuario(this.usuarioCadastro);
  }


  salvar() {
    console.log(this.usuarioService.getUsuarioId);
    // this.usuarioService.atualizarUsuario(this.auguard.getUsuario);
  }
}

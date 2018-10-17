import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario: any;
  id: string;
  listaDeUsuarios: {};
  constructor(private usuarioService: UsuarioService) {

  }

  ngOnInit() {
    this.listar();
    //oi

    //this.usuario = this.usuarioService.listarUsuario(this.usuarioService.getUsuarioId);

  }
  listar() {
    this.usuarioService.getUsuario();
  }


  salvar() {
    console.log(this.usuarioService.getUsuarioId);
    // this.usuarioService.atualizarUsuario(this.auguard.getUsuario);
  }
}

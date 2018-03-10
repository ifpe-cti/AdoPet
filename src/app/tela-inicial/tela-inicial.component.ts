import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {
  usuario: Usuario;
  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) {
    this.usuarios = [];
		this.usuario = {email:"", nome:"", senha:""};
   }

  ngOnInit() {
  }
  entrar(){
    console.log("entrooouu");
  }
  salvar(){
    console.log("salvooouu");

  }
  

}

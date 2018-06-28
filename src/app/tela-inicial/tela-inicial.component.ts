/*The MIT License (MIT)

Copyright (c) 2018 Emely Melo e Eva Vict�ria

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */
import { UsuarioCadastro } from './../model/UsuarioCadastro';
import { UsuarioService } from '../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css'],
})
export class TelaInicialComponent implements OnInit {
  usuarioCadastro: UsuarioCadastro;
  usuario: Usuario;
  msgs: Message[];
  usuarios: Usuario[];
  user: Usuario;

  constructor(private usuarioService: UsuarioService, private route: Router, private rotaAtiva: ActivatedRoute) {
    this.user = this.rotaAtiva.snapshot.params['user'];
    this.usuario = {email:"", senha:""};
    this.usuarios = [];
    this.msgs = [];
		this.usuarioCadastro = {email:"", nome: "", senha:""};
   }
   //colocar a logo

  ngOnInit() {
    this.usuarioService.getUsuarios();
  }
  entrar(){
   /* let podePassar: boolean = false;
    podePassar = this.usuarioService.verificar(this.usuario);
    if(podePassar == true){
      console.log("entrooouu");
      this.route.navigate(["feed"]);
    }else{
      console.log("pegou mas não pode entrar");
      //this.showError();
    }*/
  }
 
  salvar(usuario: Usuario){
    this.usuarioService.salvar(this.usuarioCadastro);
    //this.usuarioService.verificarSeFoiSalvo(this.usuarioCadastro);
    //sessionStorage.setItem("emailUsuario", this.usuario.email);
    
    this.route.navigate(['/feed/listar-animais']);
  }

  showError() {
		this.msgs = [];
		this.msgs.push({ severity: 'error', summary: 'Login inexistente', detail: 'Verifique o login e a senha ou cadastre-se!' });
	}

}

import { UsuarioCadastro } from './../model/UsuarioCadastro';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Router } from '@angular/router';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {
  usuarioCadastro: UsuarioCadastro;
  usuario: Usuario;
  msgs: Message[];
  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService, private route: Router) {
    this.usuarios = [];
    this.msgs = [];
		this.usuarioCadastro = {email:"", nome: "", senha:""};
   }

  ngOnInit() {
    this.usuarios = this.usuarioService.getUsuarios();
  }
  entrar(){
    let podePassar: boolean = false;
    podePassar = this.usuarioService.verificar(this.usuario);
    if(podePassar == true){
      console.log("entrooouu");
      this.route.navigate(["feed"]);
    }else{
      console.log("pegou mas não pode entrar");
      //this.showError();
    }
  }

  salvar(usuario: Usuario){
    this.usuarioService.add(this.usuario);
    //rota
    console.log("salvooooooou");
  }

  showError() {
		this.msgs = [];
		this.msgs.push({ severity: 'error', summary: 'Login inexistente', detail: 'Verifique o login e a senha ou cadastre-se!' });
	}

}

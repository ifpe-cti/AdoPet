import { UsuarioCadastro } from './../model/UsuarioCadastro';
import { UsuarioService } from '../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { Message } from 'primeng/components/common/api';
import { AuthService } from '../services/auth.service';
import { FormGroup } from '../../../node_modules/@angular/forms';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';


@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css'],
})

export class TelaInicialComponent implements OnInit {

  cadastroForm: FormGroup;
  usuarioCadastro: UsuarioCadastro;
  usuario: Usuario;
  msgs: Message[];
  usuarios: Usuario[];
  user: Usuario = {
    $id: '',
    nome: ' ',
    email: '',
    senha: ''
  }

  constructor(private usuarioService: UsuarioService, private route: Router,
    private rotaAtiva: ActivatedRoute, private authService: AuthService) {
    this.user = this.rotaAtiva.snapshot.params['user'];
    this.usuarios = [];
    this.msgs = [];
  }

  ngOnInit() {
    //this.usuarioService.getUsuarios();
   // if (isPlatformBrowser(this.platformId)) {
            // localStorage will be available: we can use it.
       // }
       // if (isPlatformServer(this.platformId)) {
            // localStorage will be null.
      //  }
    }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then(() => {
        this.route.navigate(['/feed/listar-animais']);
      })
      .catch((err) => console.log(err));
  }
}
  



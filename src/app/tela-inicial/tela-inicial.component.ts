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
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';

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
    $key: '',
    email: '',
    senha: ''
  }

  constructor(private usuarioService: UsuarioService, private route: Router,
    private rotaAtiva: ActivatedRoute, private authService: AuthService) {
    this.user = this.rotaAtiva.snapshot.params['user'];
    this.usuario = {
      $key: "",
      email: "",
      senha: "",
      id: ""
    };
    this.usuarios = [];
    this.msgs = [];
    this.usuarioCadastro = {
      $key: "",
      email: "",
      nome: "",
      senha: "",
      id: ""
    };
    this.cadastroForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*"),
      ]),
      senha: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      nome: new FormControl('', [
        Validators.required
      ]),
    });
  }
  //colocar a logo

  ngOnInit() {
    this.usuarioService.getUsuarios();
  }
  onSubmit(formData) {
    if (formData.valid) {
      this.authService.registerRegular(formData).then(resultado => {
        this.route.navigate(['/feed/listar-animais']);
      }).catch(erro => {
        //this.erro = erro;
        console.log("erro");
      });
    }
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then((res) => {
        this.route.navigate(['/feed/listar-animais']);
      })
      .catch((err) => console.log(err));
  }

  registerWithEmail() {
    this.authService.registerRegular(FormData)
      .then((res) => {
        console.log(res);
        this.route.navigate(['/feed/listar-animais']);
      })
      .catch((err) => console.log('error: ' + err));
  }
  showError() {
    this.msgs = [];
    this.msgs.push({
      severity: 'error', summary: 'Login inexistente',
      detail: 'Verifique o login e a senha ou cadastre-se!'
    });
  }

}

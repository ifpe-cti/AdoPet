import { UsuarioCadastro } from './../model/UsuarioCadastro';
import { UsuarioService } from '../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { Message } from 'primeng/components/common/api';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '../../../node_modules/@angular/forms';

type UserFields = 'email' | 'senha';
type FormErrors = { [u in UserFields]: string };

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
    email: '',
    senha: ''
  }
  newUser = true;
  formErrors: FormErrors = {
    'email': '',
    'senha': '',
  };
  validationMessages = {
    'email': {
      'required': 'Email é obrigatório.',
      'email': 'Email deve ser válido',
    },
    'senha': {
      'required': 'Senha é obrigatória.',
      'pattern': 'A senha deve conter letras e números.',
      'minlength': 'O tamanho minimo para senha é de 6 caracteres.',
      'maxlength': 'O tamanho máximo para senha é de 26 caracteres.',
    },
  };

  constructor(private usuarioService: UsuarioService, private route: Router,
    private rotaAtiva: ActivatedRoute, private authService: AuthService, private formBuilder: FormBuilder) {
    this.user = this.rotaAtiva.snapshot.params['user'];
    this.usuarios = [];
    this.msgs = [];
  }
  //colocar a logo

  ngOnInit() {
    this.usuarioService.getUsuarios();
  }
  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then((res) => {
        this.route.navigate(['/feed/listar-animais']);
      })
      .catch((err) => console.log(err));
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
    .then((res) => { 
        this.route.navigate(['/feed/listar-animais'])
      })
    .catch((err) => console.log(err));
  }



  showError() {
    this.msgs = [];
    this.msgs.push({
      severity: 'error', summary: 'Login inexistente',
      detail: 'Verifique o login e a senha ou cadastre-se!'
    });
  }

}

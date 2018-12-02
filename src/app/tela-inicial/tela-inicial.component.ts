import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { Message } from 'primeng/components/common/api';
import { AuthService } from '../services/auth.service';
import { FormGroup } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css'],
})

export class TelaInicialComponent implements OnInit {
  cadastroForm: FormGroup;
  usuario: Usuario;
  msgs: Message[];
  usuarios: Usuario[];
  user: Usuario = {
    $id: '',
    $nome: ' ',
    email: '',
    senha: ''
  }

  constructor(private route: Router, private rotaAtiva: ActivatedRoute, private authService: AuthService) {
    this.user = this.rotaAtiva.snapshot.params['user'];
    this.usuarios = [];
    this.msgs = [];
  }
  ngOnInit() {}

  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then(() => {
        this.route.navigate(['/feed/listar-animais']);
      })
      .catch((err) => console.log(err));
  }
}
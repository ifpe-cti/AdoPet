import { AuthGuard } from './../../services/auth-guard.service';
import { Usuario } from './../../model/Usuario';
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
  constructor(private route : ActivatedRoute, private usuarioService: UsuarioService) { 

  }

  ngOnInit() {
   this.usuario = this.usuarioService.listarUsuario(this.usuarioService.getUsuarioId);
    
  }

  salvar(){
    console.log(this.usuarioService.getUsuarioId);
   // this.usuarioService.atualizarUsuario(this.auguard.getUsuario);
  }
}

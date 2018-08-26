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
  usuario: Usuario;
  id: string;
  constructor(private route : ActivatedRoute, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuarios();
    this.route.params.subscribe(
      (params: any) => {
        this.id = params ['id'];
      }
    );
  }

  salvar(){
    alert(this.usuario.$id);
    //this.usuarioService.atualizarUsuario(this.usuario);
  }
}

import { Injectable } from '@angular/core';
import { Usuario } from './model/Usuario';
import {UsuarioCadastro} from './model/UsuarioCadastro';

@Injectable()
export class UsuarioService {

  private usuarios: Usuario[] = new Array<Usuario>();
  
  constructor() {
  }

  usuario: Usuario;
  getUsuarios() {
    return this.usuarios;
  }
  add(usuario: Usuario){
    this.usuarios.push(usuario);
  }

  verificar(usuario:Usuario){
    let ehValido:boolean = false; 
    for(let i:number =0;i<this.usuarios.length;i++){
      if(this.usuarios[i].email == this.usuario.email && this.usuarios[i].senha == this.usuario.senha){
        ehValido = true;
      }
    }
    return ehValido;	
  }

  verificarSeFoiSalvo(usuario: Usuario){
    //NÃO ENTENDI - EM É AQUI QUE TA DANDO ERRO
    for (let i = 0; i < this.usuarios.length; i++) {
      if(this.usuarios[i].email == this.usuario.email && this.usuarios[i].senha == this.usuario.senha){
        console.log("salvou");
      }
      //else{
        //pede pra fazer dnv
     // }
      
    }
  }
}
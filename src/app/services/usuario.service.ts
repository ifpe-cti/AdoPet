import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../model/Usuario';

  @Injectable()
  export class UsuarioService {

  // private usuarios: Usuario[] = new Array<Usuario>();
    private usuarioCollection: AngularFirestoreCollection<Usuario>;
    
    constructor(private angularFirestore: AngularFirestore) {
      this.usuarioCollection = this.angularFirestore.collection<Usuario>("usuario");

    }

    usuario: Usuario;
    getUsuarios() : Observable<any[]> {
      let resultados: any[] = [];
      let meuObservable = new Observable<any[]>(observer => {
        this.usuarioCollection.snapshotChanges().subscribe(result => {
          result.map(documents => {
            let id = documents.payload.doc.id;
            let data = documents.payload.doc.data();
            let document = { id: id, ...data };
            resultados.push(document);
          });
          observer.next(resultados);
          observer.complete();
        }); });
      return meuObservable;
      }
    
    
    /*{
      return this.usuarios;
    }*/
    salvar(usuario: Usuario){
      this.usuarioCollection.add(usuario).then(
        resultado => {
              usuario.id = resultado.id;
            });
    }

    verificar(usuario:Usuario){
      /*let ehValido:boolean = false; 
      for(let i:number =0;i<this.usuarios.length;i++){
        if(this.usuarios[i].email == this.usuario.email && this.usuarios[i].senha == this.usuario.senha){
          ehValido = true;
        }
      }
      return ehValido;	*/
    }

    /*verificarSeFoiSalvo(usuario: Usuario){
      //NÃO ENTENDI - EM É AQUI QUE TA DANDO ERRO
      for (let i = 0; i < this.usuarios.length; i++) {
        if(this.usuarios[i].email == this.usuario.email && this.usuarios[i].senha == this.usuario.senha){
          console.log("salvou");
        }
        //else{
          //pede pra fazer dnv
      // }
        
      }
    }*/
  }
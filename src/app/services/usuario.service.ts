import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../model/Usuario';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthGuard } from './auth-guard.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UsuarioService {

  private usuarioCollection: AngularFirestoreCollection<Usuario>;
  usuario: Observable<Usuario[]>;
  authState: any = null;

  constructor(private angularFirestore: AngularFirestore, private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.usuarioCollection = this.angularFirestore.collection<Usuario>("usuario");
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }
  
  getUsuarios(): Observable<any[]> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
      this.usuarioCollection.snapshotChanges().subscribe(result => {
        result.map(documents => {
          let id = documents.payload.doc.id;
          let data = documents.payload.doc.data() as Usuario
          let document = { id: id, ...data };
          resultados.push(document);
        });
        observer.next(resultados);
        observer.complete();
      });
    });
    return meuObservable;
  }
  listarUsuario(usuarioId){
    return new Observable(observer => {
      let doc = this.usuarioCollection.doc(usuarioId);
      doc.snapshotChanges().subscribe(result => {
        let id = result.payload.id;
        let data = result.payload.data()
        let document = { id: id, ...data };
        observer.next(document);
        observer.complete();
      });
    });
  }
  get authenticated(): boolean {
    return this.authState !== null;
  }
  get getUsuario(): any {
    return this.authenticated ? this.authState : null;
}
  get getUsuarioId(): string {
    return this.authenticated ? this.authState.uid : '';
  }
  salvar(usuario: Usuario) {
    this.usuarioCollection.add(usuario).then(
      resultado => {
        usuario.$id = resultado.id;
      });
  }
  
  atualizarUsuario(usuario: Usuario) {
    this.usuarioCollection.doc(usuario.$id).update({ /*colocar um boolean pra dizer se o usuario foi
    "preenchido corretamente" */});
  }

  deletarUsuario(usuario: Usuario) {
    this.usuarioCollection.doc(usuario.$id).delete();
  }
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }
  private updateUserData(): void {
      let path = `users/${this.currentUserId}`; 
      let data = {
                    email: this.authState.email,
                    name: this.authState.displayName
                  }
  
      this.db.object(path).update(data)
      .catch(error => console.log(error));
  
    }
}
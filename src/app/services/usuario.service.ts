import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../model/Usuario';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UsuarioService {

  private usuarioCollection: AngularFirestoreCollection<Usuario>;
  usuario: Observable<Usuario[]>;
  authState: any = null;
  

  constructor(private angularFirestore: AngularFirestore, private afAuth: AngularFireAuth) {
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
  listarUsuario(idUsuario): Observable<any> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any>(observer => {
      this.usuarioCollection = this.angularFirestore.collection<Usuario>("usuario", ref => ref.where('usuarioId', '==', idUsuario));
      this.usuarioCollection.snapshotChanges().subscribe(result => {
        result.map(documents => {
          let id = documents.payload.doc.id;
          let data = documents.payload.doc.data();
          let document = { id: id, ...data };
          resultados.push(document);
        });
        observer.next(resultados[0]);
        observer.complete();
      });
    });
    return meuObservable;
  }
  salvar(usuario: Usuario) {
    this.usuarioCollection.add(usuario)
  }
  atualizar(usuario: Usuario) {
    return this.usuarioCollection.doc(usuario.$id).update(usuario);
  }
  delete(usuario: Usuario) {
    return this.usuarioCollection.doc(usuario.$id).delete();
  }
  get authenticated(): boolean {
    return this.authState !== null;
  }
  get getUsuario(): any {
    return localStorage.getItem("key")
  }
  get getUsuarioId(): string {
    return this.authenticated ? this.authState.uid : '';
  }
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }
}
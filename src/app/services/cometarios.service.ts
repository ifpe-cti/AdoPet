import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Comentario } from '../model/comentario';

@Injectable()
export class CometariosService {

  private comentarioCollection: AngularFirestoreCollection<any>;
  
  constructor(private angularFirestore: AngularFirestore) { 
    this.comentarioCollection = this.angularFirestore.collection<Comentario>("comentario");
  }

  listarTodos(): Observable<any[]> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
      this.comentarioCollection.snapshotChanges().subscribe(result => {
        result.map(documents => {
          let id = documents.payload.doc.id;
          let data = documents.payload.doc.data();
          let document = { id: id, ...data };
          resultados.push(document);
        });
        observer.next(resultados);
        observer.complete();
      });
    });
    return meuObservable;
  }
  salvar(comentario: Comentario) {
    this.comentarioCollection.add(comentario)
  }
  atualizar(comentario: Comentario) {
    return this.comentarioCollection.doc(comentario.id).update(comentario);
  }
  delete(comentario: Comentario) {
    return this.comentarioCollection.doc(comentario.id).delete();
  }
}

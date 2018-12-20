import { AuthService } from './auth.service';
import { AnimalService } from './animal.service';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Comentario } from '../model/comentario';

@Injectable()
export class CometariosService {

  private comentarioCollection: AngularFirestoreCollection<any>;
  
  constructor(private angularFirestore: AngularFirestore, private authService: AuthService) { 
    this.comentarioCollection = this.angularFirestore.collection<Comentario>("comentario");
  }

  listarComentarioAnimal(idAnimal: String): Observable<any[]> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
      this.comentarioCollection = this.angularFirestore.collection<Comentario>("comentario", ref => ref.where('idAnimal', '==', idAnimal));
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
  salvar(texto: string, idAnimal: any): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      let comentario = new Comentario();
      comentario.idAnimal = idAnimal;
      comentario.idUsuario = this.authService.getUsuarioLogado();
      comentario.texto = texto;
      this.comentarioCollection.add(comentario.toDocument()).then(resultado => {
        comentario.id = resultado.id;
        resolve();
      }).catch((error) => reject(error));
    })
  }
  delete(comentario: Comentario) {
    return this.comentarioCollection.doc(comentario.id).delete();
  }
}

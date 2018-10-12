import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { UsuarioService } from './usuario.service';
import { Animal } from '../model/Animal';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PedidosAdocaoService {
  private pedidosCollection: AngularFirestoreCollection<Animal>;

  constructor(private angularFirestore: AngularFirestore, private usuarioService: UsuarioService) {
    this.pedidosCollection = this.angularFirestore.collection<Animal>("pedidos-adocao");
   }

   listar(): Observable<any[]> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
      this.pedidosCollection.snapshotChanges().subscribe(result => {
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
  
  salvar(animal: Animal){
    this.pedidosCollection.add(animal).then(
      resultado => {
        animal.id = resultado.id;
        animal.idUsuarioPedidoAdocao = this.usuarioService.getUsuarioId;
      }
    )
  }
  apagar(animal: Animal){
    return this.pedidosCollection.doc(animal.id).delete();
  }   
}

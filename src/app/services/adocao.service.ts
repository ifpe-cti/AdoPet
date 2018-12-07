import { PedidosAdocao } from './../model/PedidosAdocao';
import { PedidosAdocaoService } from './pedidos-adocao.service';
import { Injectable } from '@angular/core';
import { Adocao } from '../model/Adocao';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdocaoService {
  private animaisAdotadosCollection: AngularFirestoreCollection<any>;
  idAnimalAdotado: String = null;

  constructor(private angularFirestore: AngularFirestore) {
    this.animaisAdotadosCollection = this.angularFirestore.collection<Adocao>("adocao");
  }



  salvar(idPedido: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      let adocao = new Adocao();
      adocao.idPedido = idPedido;
      //adocao.data = ?;
      this.animaisAdotadosCollection.add(adocao.toDocument()).then(resultado => {
        adocao.id = resultado.id;
        resolve();
      }).catch((error) => reject(error));
    })
  }

  /* getIdAnimalAdotado() {
     return this.idAnimalAdotado;
   }*/

  listarAdocaoPorPedido(idPedido) {
    let resultados: any[] = [];
    let meuObservable = new Observable<any>(observer => {
      this.animaisAdotadosCollection = this.angularFirestore.collection<any>("adocao", ref => ref.where('idPedido', '==', idPedido));
      this.animaisAdotadosCollection.snapshotChanges().subscribe(result => {
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

  listarTodosAdocao(): Observable<any[]> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
      this.animaisAdotadosCollection.snapshotChanges().subscribe(result => {
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
}
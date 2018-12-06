import { PedidosAdocaoService } from './pedidos-adocao.service';
import { Injectable } from '@angular/core';
import { Adocao } from '../model/Adocao';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdocaoService {
  private animaisAdotadosCollection: AngularFirestoreCollection<Adocao>;
  idAnimalAdotado: String = null;

  constructor(private angularFirestore: AngularFirestore) {
    this.animaisAdotadosCollection = this.angularFirestore.collection<Adocao>("animaisAdotados");
  }

  

 /* inserir(adocao: Adocao) {
    adocao.id = this.pedidosAdocao.getIdPedido();
    this.animaisAdotadosCollection.add(adocao).then(
      resultado => {
        this.idAnimalAdotado = adocao.id;
        adocao.id = resultado.id;
      })
  }*/

  getIdAnimalAdotado() {
    return this.idAnimalAdotado;
  }

  listarAdocaoPorPedido(idPedido){
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

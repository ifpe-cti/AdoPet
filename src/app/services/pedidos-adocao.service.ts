import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { UsuarioService } from './usuario.service';
import { Observable } from 'rxjs/Observable';
import { PedidosAdocao } from '../model/PedidosAdocao';
@Injectable()
export class PedidosAdocaoService {
  private pedidosCollection: AngularFirestoreCollection<PedidosAdocao>;
  pedido: PedidosAdocao;

  constructor(private angularFirestore: AngularFirestore, private usuarioService: UsuarioService) {
    this.pedidosCollection = this.angularFirestore.collection<PedidosAdocao>("pedidos-adocao");
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
  //lista os pedidos passando o id do animal
  listarPorIdAnimal(idAnimal: String): Observable<any[]> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
    this.pedidosCollection = this.angularFirestore.collection<PedidosAdocao>("pedido", ref=>ref.where('idAnimal', '==', idAnimal));
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
  //lista os pedidos passando o id do usuário
  listarPorIdUsuario(idUsuario: String): Observable<any[]> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
    this.pedidosCollection = this.angularFirestore.collection<PedidosAdocao>("pedido", ref=>ref.where('idUsuario', '==', idUsuario));
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
  salvar(pedido: PedidosAdocao){
    this.pedidosCollection.add(pedido).then(
      resultado => {
        pedido.id = resultado.id;
        pedido.idUsuario = this.usuarioService.getUsuarioId;
      })
  }
  getIdPedido(){
    return this.pedido.id;
  }
  remover(pedido: PedidosAdocao){
    return this.pedidosCollection.doc(pedido.id).delete();
  }   
}
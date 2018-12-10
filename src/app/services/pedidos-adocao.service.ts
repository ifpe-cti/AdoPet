import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { PedidosAdocao } from '../model/PedidosAdocao';
import { Animal } from '../model/Animal';
import { AdocaoService } from './adocao.service';
@Injectable()
export class PedidosAdocaoService {
  private pedidosCollection: AngularFirestoreCollection<any>;
  pedido: PedidosAdocao;
  private status: String;

  constructor(private angularFirestore: AngularFirestore, private authService: AuthService, 
    private adocaoService: AdocaoService) {
    this.pedidosCollection = this.angularFirestore.collection<PedidosAdocao>("pedidos-adocao");
  }

  getStatus(idPedido){
    let meuObservable = new Observable<any[]>(observer => {
    this.status = "Pendente";
    this.adocaoService.listarAdocaoPorPedido(idPedido).subscribe(resultado =>{
      if(resultado != 0){
        this.status = "Adotado";
      }
    observer.next(resultado);
    observer.complete();
    });
  });
  //console.log("status " + this.status)
    return meuObservable;
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
      this.pedidosCollection = this.angularFirestore
      .collection<PedidosAdocao>("pedidos-adocao", ref => ref.where('idAnimal', '==', idAnimal));
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
      this.pedidosCollection = this.angularFirestore
      .collection<PedidosAdocao>("pedidos-adocao", ref => ref.where('idUsuarioPedido', '==', idUsuario));
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
  salvar(animal: Animal):  Promise<void> {
    return new Promise<void>((resolve, reject) => {
    let pedido = new PedidosAdocao();
    pedido.idAnimal = animal.id;
    pedido.idUsuario = this.authService.getUsuarioLogado();
    this.pedidosCollection.add(pedido.toDocument()).then(resultado => {
        pedido.id = resultado.id;
        resolve();
      }).catch((error) => reject(error));
    })
}
  getIdPedido() {
    return this.pedido.id;
  }
  //verifica se o pedido passado está na collection pedidos de adoção se estiver o status é pendente
  retornaStatus(pedido: PedidosAdocao) {
    var pedidosRef = this.angularFirestore.collection("pedidos-adocao");
    var query = pedidosRef.ref.where("id", "==", pedido.id);
    if (query) {
      this.status = "Pendente"
    }
  }
  remover(pedido: PedidosAdocao) {
    return this.pedidosCollection.doc(pedido.id).delete();
  }

}
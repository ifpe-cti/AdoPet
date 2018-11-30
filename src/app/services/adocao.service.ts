import { PedidosAdocaoService } from './pedidos-adocao.service';
import { Injectable } from '@angular/core';
import { Adocao } from '../model/Adocao';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class AdocaoService {
  private adocaoCollection: AngularFirestoreCollection<Adocao>;

  constructor(private angularFirestore: AngularFirestore, private pedidosAdocao: PedidosAdocaoService) {
    this.adocaoCollection = this.angularFirestore.collection<Adocao>("adocao");
   }

   inserir(adocao: Adocao){
    adocao.idPedidoAdocao = this.pedidosAdocao.getIdPedido();
    this.adocaoCollection.add(adocao).then(
      resultado => {
        adocao.id = resultado.id;
      }
    )
   }

}

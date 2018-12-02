import { PedidosAdocaoService } from './pedidos-adocao.service';
import { Injectable } from '@angular/core';
import { Adocao } from '../model/Adocao';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class AdocaoService {
  private animaisAdotadosCollection: AngularFirestoreCollection<Adocao>;
  idAnimalAdotado: String = null;

  constructor(private angularFirestore: AngularFirestore, private pedidosAdocao: PedidosAdocaoService) {
    this.animaisAdotadosCollection = this.angularFirestore.collection<Adocao>("animaisAdotados");
  }

  inserir(adocao: Adocao) {
    adocao.idPedidoAdocao = this.pedidosAdocao.getIdPedido();
    this.animaisAdotadosCollection.add(adocao).then(
      resultado => {
        this.idAnimalAdotado = adocao.id;
        adocao.id = resultado.id;
      })
  }

  getIdAnimalAdotado() {
    return this.idAnimalAdotado;
  }

}

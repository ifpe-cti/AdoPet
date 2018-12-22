import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Animal } from '../model/Animal';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../model/Usuario';
import { AuthService } from './auth.service';
import { AdocaoService } from './adocao.service';
import { PedidosAdocaoService } from './pedidos-adocao.service';
import { Comentario } from '../model/comentario';

@Injectable()
export class AnimalService {
  private animalCollection: AngularFirestoreCollection<any>;
  private comentarioCollection: AngularFirestoreCollection<any>;
  animal$: Observable<Animal[]>;
  usuario: Usuario;
  animal: Animal;
  animais: Animal[]
  comentario: Comentario;

  constructor(private angularFirestore: AngularFirestore, private authService: AuthService,
    private adocaoService: AdocaoService, private pedidosAdocao: PedidosAdocaoService) {
    this.animalCollection = this.angularFirestore.collection<Animal>("animal");
    this.comentarioCollection = this.angularFirestore.collection<Comentario>("comentario");
    this.comentario = new Comentario;
  }

  listarTodos(): Observable<any[]> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
      this.animalCollection.snapshotChanges().subscribe(result => {
        result.map(documents => {
          let id = documents.payload.doc.id;
          let data = documents.payload.doc.data();
          let document = { id: id, ...data };
          resultados.push(document);
        });
        for (let i = 0; i < resultados.length; i++) {
          this.pedidosAdocao.listarPorIdAnimal(resultados[i].id).subscribe(pedidoAdocao => {
            for (let j = 0; j < pedidoAdocao.length; j++) {
              this.pedidosAdocao.getStatus(pedidoAdocao[j].id).subscribe(status => {
                if (status != 0) {
                  resultados.slice(i, 1);
                }
              })
            }
          })
        }
        observer.next(resultados);
        observer.complete();
      });
    });
    return meuObservable;
  }
  //retorna os animais de um usuário específico
  listarPorIdUsuario(idUsuario: String): Observable<any[]> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
      this.animalCollection = this.angularFirestore.collection<Animal>("animal", ref => ref.where('idUsuario', '==', idUsuario));
      this.animalCollection.snapshotChanges().subscribe(result => {
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

  
  //retorna o animal que tem determinado id
  listarId(animalId) {
    return new Observable(observer => {
      let doc = this.animalCollection.doc(animalId);
      doc.snapshotChanges().subscribe(result => {
        let id = result.payload.id;
        let data = result.payload.data()
        let document = { id: id, ...data };
        observer.next(document);
        observer.complete();
      });
    });
  }
  salvar(animal: Animal): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      animal.idUsuario = this.authService.getUsuarioLogado();
      this.animalCollection.add(animal).then(resultado => {
        animal.id = resultado.id;
        resolve();
      }).catch((error) => reject(error));
    })
  }
  atualizarAnimal(animal: Animal) {
    return this.animalCollection.doc(animal.id).update(animal);
  }
  delete(animal: Animal) {
    return this.animalCollection.doc(animal.id).delete();
  }
  get idAnimal() {
    return this.animal.id;
  }
}
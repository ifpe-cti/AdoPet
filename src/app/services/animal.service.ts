import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Animal } from '../model/Animal';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../model/Usuario';
import { AuthService } from './auth.service';
import { AdocaoService } from './adocao.service';
import { PedidosAdocaoService } from './pedidos-adocao.service';

@Injectable()
export class AnimalService {
  private animalCollection: AngularFirestoreCollection<any>;
  animal$: Observable<Animal[]>;
  usuario: Usuario;
  animal: Animal;

  constructor(private angularFirestore: AngularFirestore, private authService: AuthService,
    private adocaoService: AdocaoService, private pedidosAdocao: PedidosAdocaoService) {
    this.animalCollection = this.angularFirestore.collection<Animal>("animal");
  }
  //retorna todos os animais
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

  listarAnimaisParaAdocao() {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
      this.listarTodos().subscribe(animais => {
        this.adocaoService.listarTodosAdocao().subscribe(animaisAdotados => {
          for (let i = 0; i < animais.length; i++) {
            for (let j = 0; j < animaisAdotados.length; j++) {
              if (animais[i].animal_id != animaisAdotados[j].animal_id) {
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
              }
            }
          }
        })
      })
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
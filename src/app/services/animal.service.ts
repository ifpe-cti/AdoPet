import { UsuarioService } from './usuario.service';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Animal } from '../model/Animal';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../model/Usuario';


@Injectable()

export class AnimalService {
  private animalCollection: AngularFirestoreCollection<Animal>;
  animal$: Observable<Animal[]>;
  usuario: Usuario;
  animal: Animal;

  constructor(private angularFirestore: AngularFirestore, private usuarioService: UsuarioService) {
    this.animalCollection = this.angularFirestore.collection<Animal>("animal");
  }
//retorna os animais que não foram adotados
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
  listarPorIdUsuario(usuario:Usuario): Observable<any[]> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
//      this.animalCollection = this.angularFirestore.collection<Animal>("animal", ref=>ref.where('usuarioId', '==', usuario.$id));
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
  listarId(animalId){
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
  salvar(animal: Animal) {
    this.animalCollection.add(animal).then(
      resultado => {
        animal.id = resultado.id;
        animal.idUsuario = this.usuarioService.getUsuarioId;
      });
  }

  atualizarAnimal(animal: Animal) {
    return this.animalCollection.doc(animal.id).update(animal);
  }

  delete(animal: Animal) {
    return this.animalCollection.doc(animal.id).delete();
  }
}
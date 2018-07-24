import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Animal } from '../model/Animal';
import { Observable } from 'rxjs/Observable';


@Injectable()

export class AnimalService {
  private animalCollection: AngularFirestoreCollection<Animal>;
  animal$: Observable<Animal[]>;

  constructor(private angularFirestore: AngularFirestore) {
    this.animalCollection = this.angularFirestore.collection<Animal>("animal");
  }


  listar(): Observable<any[]> {
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
  
  listarId(id: string){

  }

  salvar(animal: Animal) {
    this.animalCollection.add(animal).then(
      resultado => {
        animal.id = resultado.id;
      });
  }

  atualizarAnimal(animal: Animal) {
    this.animalCollection.doc(animal.id).update({ /*colocar um boolean pra dizer se o usuario foi
    "preenchido corretamente" */});
  }

  delete(animal: Animal) {
    this.animalCollection.doc(animal.id).delete();
  }


}
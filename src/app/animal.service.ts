import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Animal } from './model/Animal';
import { Observable } from 'rxjs/Observable';


@Injectable()

export class AnimalService {
  private animalCollection: AngularFirestoreCollection<Animal>;

  constructor(private angularFirestore: AngularFirestore) {
   this.animalCollection = this.angularFirestore.collection<Animal>("animal");

  }
  animal: Animal;
  getAnimal() : Observable<any[]> {
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
      }); });
    return meuObservable;
    }
  
    salvar(animal: Animal){
      this.animalCollection.add(animal).then(
        resultado => {
              animal.id = resultado.id;
            });
    }
}
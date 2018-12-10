import { AnimalService } from './../../services/animal.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-meus-animais-edit',
  templateUrl: './meus-animais-edit.component.html',
  styleUrls: ['./meus-animais-edit.component.css']
})
export class MeusAnimaisEditComponent implements OnInit {
  id: string;
  animal: any;
  tipoDeAnimal: SelectItem[];
  idade: SelectItem[];
  sexo: SelectItem[];
  porte: SelectItem[];

  constructor(private route: ActivatedRoute, private animalService: AnimalService, private rota: Router) { 
    this.tipoDeAnimal = [
      {label: 'Selecione', value: null},
      {label: 'Cachorro', value: 'Cachorro'},
      {label: 'Gato', value: 'Gato'},
    ];
    this.idade = [
      {label: 'Selecione', value: null},
      {label: 'Filhote', value: 'Filhote'},
      {label: 'Adulto', value: 'Adulto'},
    ];
    this.sexo = [
      {label: 'Selecione', value: null},
      {label: 'Fêmea', value: 'Femea'},
      {label: 'Macho', value: 'Macho'},
    ];
    this.porte = [
      {label: 'Selecione', value: null},
      {label: 'Pequeno', value: 'Pequeno'},
      {label: 'Médio', value: 'Médio'},
      {label: 'Grande', value: 'Grande'},
    ]
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.listar()
      }
    );
  }
  listar(){
    this.animal = this.animalService.listarId(this.id).subscribe(
      resultadoObserverble => {
        this.animal = resultadoObserverble;
      })
  }
  atualizar() {
    if (this.animal.id != undefined)
      this.animalService.atualizarAnimal(this.animal).then(() => {
        this.listar();
        this.animal = null;
        this.rota.navigate(['feed/meus-animais']);
      });
  }
  apagar() {
    this.animalService.delete(this.animal).then(() => {
      this.listar();
      this.animal = null;
      this.rota.navigate(['feed/meus-animais']);
    });
  }

}

import { AnimalService } from './../../services/animal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { PedidosAdocaoService } from '../../services/pedidos-adocao.service';

@Component({
  selector: 'app-visualizar-animal',
  templateUrl: './visualizar-animal.component.html',
  styleUrls: ['./visualizar-animal.component.css']
})
export class VisualizarAnimalComponent implements OnInit {
  animal: any;
  id: string;
  msgs: Message[];

  constructor(private route: ActivatedRoute, private rota: Router, private animalService: AnimalService, private pedidoAdocaoService: PedidosAdocaoService) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params ['id'];
      }
    );
    this.animal = this.animalService.listarId(this.id).subscribe(
      resultadoObserverble => {
        this.animal = resultadoObserverble;
      }) 
  }
  adotar(){
    this.showSuccess();
    this.pedidoAdocaoService.salvar(this.animal);
    this.rota.navigate(['feed/listar-animais']);
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Parabéns!', detail:'Seu pedido de adoção foi enviado com sucesso.'});
  }
}
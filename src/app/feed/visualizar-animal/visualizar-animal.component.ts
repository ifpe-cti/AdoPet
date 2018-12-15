import { AnimalService } from './../../services/animal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { PedidosAdocaoService } from '../../services/pedidos-adocao.service';
import { Comentario } from '../../model/comentario';

@Component({
  selector: 'app-visualizar-animal',
  templateUrl: './visualizar-animal.component.html',
  styleUrls: ['./visualizar-animal.component.css']
})
export class VisualizarAnimalComponent implements OnInit {
  animal: any;
  id: string;
  msgs: Message[];
  comentario: Comentario;
  listaDeComentarios: any[] = [];

  constructor(private route: ActivatedRoute, private rota: Router, private animalService: AnimalService,
    private pedidoAdocaoService: PedidosAdocaoService) {
    this.comentario = new Comentario;
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );
    this.animal = this.animalService.listarId(this.id).subscribe(
      resultadoObserverble => {
        this.animal = resultadoObserverble;
      })
      this.listarComentarios();
  }
  adotar() {
    this.pedidoAdocaoService.salvar(this.animal).then(() => {
      this.showSuccess()
      this.rota.navigate(['feed/listar-animais']);
    }).catch(error => {
      this.showError()
      console.error(error);
    })
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Seu pedido de adoção foi enviado.', detail: 'Aguarde a permição do dono na aba "Meus pedidos" no menu' });
  }
  showError() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Erro ao adotar o animal', detail: 'Tente novamente' });
  }
  showSuccessComent() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Seu comentário foi enviado.', detail: 'Aguarde a permição do dono na aba "Meus pedidos" no menu' });
  }
  showErrorComent() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Erro ao enviar um comentário', detail: 'Tente novamente' });
  }
  enviar() {
    console.log("coment " + this.comentario.texto)
    if (this.comentario.texto == " ") {
      this.showError()
    } else {
      this.animalService.salvarComentario(this.comentario.texto).then(() => {
        this.showSuccessComent()
      }).catch(error => {
        console.log(error)
        this.showErrorComent()
      })
    }
  }
  listarComentarios() {
    this.animalService.listarTodosComentarios().subscribe(listaDeComentarios => {
      this.listaDeComentarios = listaDeComentarios;
    }
    )}
}
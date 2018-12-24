import { AuthService } from './../../services/auth.service';
import { CometariosService } from './../../services/cometarios.service';
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
  comentario: any;
  coment: Comentario
  listaDeComentarios: any[] = [];
  cols: any[];
  display: boolean = false;

  constructor(private route: ActivatedRoute, private rota: Router, private animalService: AnimalService,
    private pedidoAdocaoService: PedidosAdocaoService, private comentarioService: CometariosService, private authService: AuthService) {
    this.comentario = new Comentario;
    this.coment = new Comentario;
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
        this.carregarComentarios();
        this.cols = [
          { field: 'comentario', header: 'Comentario' },
        ]
      })
  }

  private carregarComentarios() {
    this.comentarioService.listarComentarioAnimal(this.id)
      .toPromise()
      .then(lista => {
        this.listaDeComentarios = lista;
      });
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
    this.msgs.push({ severity: 'success', summary: 'Seu comentário foi enviado.' });
  }
  showErrorComent() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Erro ao enviar um comentário', detail: 'Tente novamente' });
  }
  enviar() {
    if (this.comentario.texto == "") {
      this.showError()
    } else {
      this.comentarioService.salvar(this.comentario.texto, this.animal.id).then(() => {
        this.showSuccessComent()
        this.comentario.texto = ""
        this.carregarComentarios()
      }).catch(error => {
        console.log(error)
        this.showErrorComent()
      })
    }
  }
  listarComentarios() {
    this.comentarioService.listarComentarioAnimal(this.animal.id).subscribe(resultadoObservable => {
      this.listaDeComentarios = resultadoObservable;
    }
    )
  }

  apagarComentario() {
    if (this.coment.idUsuario == this.authService.getUsuarioLogado()) {
      this.comentarioService.delete(this.comentario).then(() => {
        this.listarComentarios();
        this.comentario = null
        this.rota.navigate(['visualizar-animal/', this.animal.id]);
       });
    }
    console.log(this.comentario.id)

  }
  showDialog() {
    this.display = true
  }
}
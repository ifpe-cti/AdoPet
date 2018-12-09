import { AnimalService } from './../../services/animal.service';
import { PedidosAdocao } from './../../model/PedidosAdocao';
import { Component, OnInit } from '@angular/core';
import { PedidosAdocaoService } from '../../services/pedidos-adocao.service';
import { AuthService } from '../../services/auth.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-meus-pedidos-adocao',
  templateUrl: './meus-pedidos-adocao.component.html',
  styleUrls: ['./meus-pedidos-adocao.component.css']
})
export class MeusPedidosAdocaoComponent implements OnInit {
  listaDePedidos: any[] = [];
  status: string;
  pedido: PedidosAdocao;

  constructor(private pedidosService: PedidosAdocaoService, private usuarioService:UsuarioService,
     private authService: AuthService, private animalService:AnimalService) { 
     }

  ngOnInit() {
    this.listar();    
  }

  getUsuario(id){
    let texto: any;
    this.usuarioService.listarUsuario(id).subscribe(resultado=>{
      texto = resultado.displayName;
    });
  }

  listar(){
    this.pedidosService.listarPorIdUsuario(this.authService.getUsuarioLogado()).subscribe(listaDePedidos => {
      this.listaDePedidos = listaDePedidos;      
      for(let i = 0; i < this.listaDePedidos.length; i++){
          this.animalService.listarId(this.listaDePedidos[i].idAnimal).subscribe(animal=>{
            this.listaDePedidos[i].animal = animal;
          });
      }


    });
  }
  verificaStatus(){
    //só quando aceitar
    
  }

}
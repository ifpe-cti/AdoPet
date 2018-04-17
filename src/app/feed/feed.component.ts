import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  items: MenuItem[];
  email:string;

  constructor() { }

  ngOnInit() {

    //this.email = sessionStorage.getItem("emailUsuario");
    //usuario = this.usuarioServico.carregar(email);

    this.items = [
            {label: 'Meu perfil', icon: 'fas fa-user'},
            {label: 'Meus animais', icon: 'fas fa-book', routerLink: "animais"},
            {label: 'Adicionar animal', icon: 'fas fa-plus-square', routerLink: "adicionarAnimal"},
            
        ];
    
  }

}

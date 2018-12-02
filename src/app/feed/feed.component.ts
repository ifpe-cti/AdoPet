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
    this.items = [
      {label: 'Home', icon: 'fas fa-home', routerLink: ["/feed/listar-animais"]},
      {label: 'Meu perfil', icon: 'fas fa-user', routerLink: ["/feed/meu-perfil"]},
      {label: 'Meus animais', icon: 'fas fa-book', routerLink: ["/feed/meus-animais"]},
      {label: 'Meus Pedidos', icon: 'fas fa-list-ul', routerLink: ["/feed/meus-pedidos-adocao"]},
      {label: 'Adicionar animal', icon: 'fas fa-plus-square', routerLink: ["/feed/adicionar-animal"]},
      {label: 'Logout', icon: 'fa fa-sign-out', routerLink: ["logout"]},            
      ];      
  }
}
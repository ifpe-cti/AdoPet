import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  items: MenuItem[];
  email:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'fas fa-home', routerLink: ["/feed/listar-animais"]},
      {label: 'Meu perfil', icon: 'fas fa-user', routerLink: ["/feed/meu-perfil"]},
      {label: 'Meus animais', icon: 'fas fa-book', routerLink: ["/feed/meus-animais"]},
      {label: 'Adicionar animal', icon: 'fas fa-plus-square', routerLink: ["/feed/adicionar-animal"]},
      {label: 'Logout', icon: 'fa fa-sign-out', routerLink: ["logout"]},            
      ];      
  }
}
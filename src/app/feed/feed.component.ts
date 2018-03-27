import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  email:string;

  constructor() { }

  ngOnInit() {

    this.email = sessionStorage.getItem("emailUsuario");
    //usuario = this.usuarioServico.carregar(email);
    
  }

}

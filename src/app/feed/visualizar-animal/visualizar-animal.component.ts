import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizar-animal',
  templateUrl: './visualizar-animal.component.html',
  styleUrls: ['./visualizar-animal.component.css']
})
export class VisualizarAnimalComponent implements OnInit {

  id: string;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params ['id'];
      }
    );
  }

}

//ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//PRIMENG
import {AccordionModule} from 'primeng/accordion';    
import {MenuItem} from 'primeng/api'; 
//ROTAS
import { routing } from './app.routing';
//SERVIÇO
import { UsuarioService } from './usuario.service';
//COMPONENTES
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';




@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

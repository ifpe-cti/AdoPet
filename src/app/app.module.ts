//ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//PRIMENG
import {AccordionModule} from 'primeng/accordion';    
import {MenuItem} from 'primeng/api'; 
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { DialogModule } from 'primeng/components/dialog/dialog';


//ROTAS
import { routing } from './app.routing';
//SERVIÇO
import { UsuarioService } from './usuario.service';
//COMPONENTES
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component'
import { FeedComponent } from './feed/feed.component'




@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    routing,
    DialogModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

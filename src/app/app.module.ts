//ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';

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
import { environment } from './../environments/environment.prod';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component'
import { FeedComponent } from './feed/feed.component';
import { BancoDeDadosComponent } from './banco-de-dados/banco-de-dados.component';
import { BancoFirebaseConfig } from '../environments/BancoFirebaseConfig';



@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    FeedComponent,
    BancoDeDadosComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    routing,
    DialogModule,
    AngularFireModule.initializeApp(BancoFirebaseConfig),
    AngularFirestoreModule.enablePersistence(),

  ],
  providers: [UsuarioService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }

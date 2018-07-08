//ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from "angularfire2/auth";

import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {TabMenuModule} from 'primeng/tabmenu';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DataViewModule} from 'primeng/dataview';


//ROTAS
import { routing } from './app.routing';

//SERVIÇO
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { UsuarioService } from './services/usuario.service';

import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component'
import { BancoDeDadosComponent } from './banco-de-dados/banco-de-dados.component';
import { BancoFirebaseConfig } from '../environments/BancoFirebaseConfig';
import { FeedComponent } from './feed/feed.component';
import { FeedModule } from './feed/feed.module';
import { ListarAnimaisComponent } from './feed/listar-animais/listar-animais.component';



@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    BancoDeDadosComponent,
    FeedComponent,
    ListarAnimaisComponent,

  ],
  imports: [
    TabMenuModule,
    BrowserModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    routing,
    DialogModule,
    AngularFireModule.initializeApp(BancoFirebaseConfig, 'angular-auth-firebase'),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FeedModule,
    ContextMenuModule,
    DataViewModule,
  ],
  providers: [UsuarioService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

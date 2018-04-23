import { FeedRoutingModule } from './feed.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { MeusAnimaisComponent } from './meus-animais/meus-animais.component';
import { AdicionarAnimalComponent } from './adicionar-animal/adicionar-animal.component';
import { FeedComponent } from './feed.component';

import {InputTextModule} from 'primeng/inputtext';


@NgModule({
    imports: [
        CommonModule,
        FeedRoutingModule,
        InputTextModule
        //FeedComponent
    ],
    exports: [],
    declarations: [
    PerfilComponent,
    MeusAnimaisComponent,
    AdicionarAnimalComponent
],
    providers: [],
})
export class FeedModule { }
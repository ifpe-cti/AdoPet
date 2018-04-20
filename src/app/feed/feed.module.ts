import { FeedRoutingModule } from './feed.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { MeusAnimaisComponent } from './meus-animais/meus-animais.component';
import { AdicionarAnimalComponent } from './adicionar-animal/adicionar-animal.component';

@NgModule({
    imports: [
        CommonModule,
        FeedRoutingModule
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
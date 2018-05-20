import { RouterModule } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
//COMPONENTES
import { AdicionarAnimalComponent } from './adicionar-animal/adicionar-animal.component';
import { MeusAnimaisComponent } from './meus-animais/meus-animais.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FeedComponent } from './feed.component';
import { ListarAnimaisComponent } from './listar-animais/listar-animais.component';

//PRIMENG
import {MenuItem} from 'primeng/api'; 

const feedRoutes = [
    {path: 'feed', component: FeedComponent, children: [
        {path: 'perfil', component: PerfilComponent},
        {path: 'meus-animais', component: MeusAnimaisComponent},
        {path: 'adicionar-animal', component: AdicionarAnimalComponent},
        {path: 'listar-animais', component: ListarAnimaisComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(feedRoutes)],
    exports: [RouterModule]
})
export class FeedRoutingModule {}
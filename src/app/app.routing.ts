import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { AdicionarAnimalComponent } from './adicionar-animal/adicionar-animal.component';
import { AnimaisComponent } from './animais/animais.component';



const APP_ROUTES: Routes = [
    {path: '', component: TelaInicialComponent},
    {path: 'feed', component: FeedComponent},
    {path: 'feed', component: FeedComponent, children: [     
        {path: 'animais', component: AnimaisComponent},
        {path: 'adicionarAnimal', component: AdicionarAnimalComponent}
    ]}
];

export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
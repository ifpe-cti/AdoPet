import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';



const APP_ROUTES: Routes = [
    {path: '', component: TelaInicialComponent},
    {path: 'feed/:user', component: FeedComponent}  
];

export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
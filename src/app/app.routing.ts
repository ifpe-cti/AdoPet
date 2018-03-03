import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const APP_ROUTES: Routes = [
    {path: '', component: TelaInicialComponent}    
];

export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarAnimaisComponent } from './feed/listar-animais/listar-animais.component';
import { AuthGuard } from './services/auth-guard.service';

const APP_ROUTES: Routes = [
    {path: '', component: TelaInicialComponent},
    {path: 'feed', component: ListarAnimaisComponent},      
];



export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
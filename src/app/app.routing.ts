import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';

const APP_ROUTES: Routes = [
    { path: '', component: TelaInicialComponent, canActivate:[AuthGuard] }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
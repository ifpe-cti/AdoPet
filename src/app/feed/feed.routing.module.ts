import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//COMPONENTES
import { AdicionarAnimalComponent } from './adicionar-animal/adicionar-animal.component';
import { MeusAnimaisComponent } from './meus-animais/meus-animais.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FeedComponent } from './feed.component';
import { ListarAnimaisComponent } from './listar-animais/listar-animais.component';
import { PedidosAdocaoComponent } from './pedidos-adocao/pedidos-adocao.component';
import { TelaInicialComponent } from '../tela-inicial/tela-inicial.component';
import { VisualizarAnimalComponent } from './visualizar-animal/visualizar-animal.component';

const feedRoutes = [
    { path: 'feed/logout', component: TelaInicialComponent },
    {path: 'feed', component: FeedComponent, children: [
            { path: 'meu-perfil', component: PerfilComponent },
            { path: 'meus-animais', component: MeusAnimaisComponent },
            { path: 'adicionar-animal', component: AdicionarAnimalComponent },
            { path: 'listar-animais', component: ListarAnimaisComponent },
            { path: 'pedidos-adocao/:idAnimal', component: PedidosAdocaoComponent },
            { path: 'visualizar-animal/:id', component: VisualizarAnimalComponent },
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(feedRoutes)],
    exports: [RouterModule]
})
export class FeedRoutingModule { }
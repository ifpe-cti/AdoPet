import { FeedRoutingModule } from './feed.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeusAnimaisComponent } from './meus-animais/meus-animais.component';
import { AdicionarAnimalComponent } from './adicionar-animal/adicionar-animal.component';
import { PedidosAdocaoComponent } from './pedidos-adocao/pedidos-adocao.component';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { GrowlModule } from 'primeng/growl';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { AnimalService } from '../services/animal.service';
import { VisualizarAnimalComponent } from './visualizar-animal/visualizar-animal.component';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MeusPedidosAdocaoComponent } from './meus-pedidos-adocao/meus-pedidos-adocao.component';
import { AdocaoService } from '../services/adocao.service';
import { PedidosAdocaoService } from '../services/pedidos-adocao.service';
import {FieldsetModule} from 'primeng/fieldset';

//import { StorageServiceModule } from '@angular-webstorage-service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
       // StorageServiceModule,
        FeedRoutingModule,
        InputTextModule,
        ListboxModule,
        RadioButtonModule,
        ButtonModule,
        InputTextareaModule,
        GrowlModule,
        KeyFilterModule,
        TableModule,
        DataViewModule,
        DropdownModule,
        CardModule,
        DialogModule,
        BrowserAnimationsModule,
        SplitButtonModule,
        ToggleButtonModule,
        FieldsetModule,
    ],
    exports: [],
    declarations: [
        MeusAnimaisComponent,
        AdicionarAnimalComponent,
        VisualizarAnimalComponent,
        PedidosAdocaoComponent,
        MeusPedidosAdocaoComponent,
    ],
    providers: [AnimalService, AdocaoService, PedidosAdocaoService],
})
export class FeedModule { }
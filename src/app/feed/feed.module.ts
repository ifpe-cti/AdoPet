import { FeedRoutingModule } from './feed.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { MeusAnimaisComponent } from './meus-animais/meus-animais.component';
import { AdicionarAnimalComponent } from './adicionar-animal/adicionar-animal.component';

import {InputTextModule} from 'primeng/inputtext';
import {ListboxModule} from 'primeng/listbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import { AnimalService } from '../services/animal.service';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {GrowlModule} from 'primeng/growl';
import {KeyFilterModule} from 'primeng/keyfilter';
import {TableModule} from 'primeng/table';
import {DataViewModule} from 'primeng/dataview';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FeedRoutingModule,
        InputTextModule,
        ListboxModule,
        RadioButtonModule,
        ButtonModule,
        InputTextareaModule,
        GrowlModule,
        KeyFilterModule,
        TableModule,
        DataViewModule
    ],
    exports: [],
    declarations: [
    PerfilComponent,
    MeusAnimaisComponent,
    AdicionarAnimalComponent,
    
],
    providers: [AnimalService],
})
export class FeedModule { }
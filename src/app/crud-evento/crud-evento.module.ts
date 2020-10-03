import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CrudEventoRoutingModule } from './crud-evento-routing.module';
import { HomeEventoComponent } from './home-evento/home-evento.component';
import { DetailsEventoComponent } from './details-evento/details-evento.component';
import { CreateEventoComponent } from './create-evento/create-evento.component';
import { UpdateEventoComponent } from './update-evento/update-evento.component';
import { TabelaComponent } from './home-evento/tabela/tabela.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '../ui/ui.module';


@NgModule({
  declarations: [HomeEventoComponent, DetailsEventoComponent, CreateEventoComponent, UpdateEventoComponent, TabelaComponent],
  imports: [
    CommonModule,
    CrudEventoRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    UiModule
  ]
})
export class CrudEventoModule { }

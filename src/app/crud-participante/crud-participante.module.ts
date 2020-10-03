import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CrudParticipanteRoutingModule } from './crud-participante-routing.module';
import { HomeParticipanteComponent } from './home-participante/home-participante.component';
import { DetailsParticipanteComponent } from './details-participante/details-participante.component';
import { CreateParticipanteComponent } from './create-participante/create-participante.component';
import { UpdateParticipanteComponent } from './update-participante/update-participante.component';
import { UiModule } from '../ui/ui.module';


@NgModule({
  declarations: [HomeParticipanteComponent, DetailsParticipanteComponent, CreateParticipanteComponent, UpdateParticipanteComponent],
  imports: [
    CommonModule,
    CrudParticipanteRoutingModule,
    HttpClientModule,
    FormsModule,
    UiModule
  ]
})
export class CrudParticipanteModule { }

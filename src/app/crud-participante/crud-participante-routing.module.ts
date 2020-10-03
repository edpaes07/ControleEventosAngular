import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateParticipanteComponent } from './create-participante/create-participante.component';
import { DetailsParticipanteComponent } from './details-participante/details-participante.component';
import { HomeParticipanteComponent } from './home-participante/home-participante.component';
import { UpdateParticipanteComponent } from './update-participante/update-participante.component';

const routes: Routes = [
  { path: 'participante', redirectTo: 'participante/home-participante', pathMatch: 'full'},
  { path: 'participante/home-participante', component: HomeParticipanteComponent },
  { path: 'participante/details-participante/:idParticipacao', component: DetailsParticipanteComponent },
  { path: 'participante/create-participante', component: CreateParticipanteComponent },
  { path: 'participante/update-participante/:idParticipacao', component: UpdateParticipanteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CrudParticipanteRoutingModule { }

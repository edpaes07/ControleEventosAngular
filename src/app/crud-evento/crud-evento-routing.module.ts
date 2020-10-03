import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeEventoComponent } from './home-evento/home-evento.component';
import { DetailsEventoComponent } from './details-evento/details-evento.component';
import { CreateEventoComponent } from './create-evento/create-evento.component';
import { UpdateEventoComponent } from './update-evento/update-evento.component';

const routes: Routes = [
  { path: 'evento', component: HomeEventoComponent, pathMatch: 'full'},
  { path: 'evento/home-evento', component: HomeEventoComponent },
  { path: 'evento/details-evento/:idEvento', component: DetailsEventoComponent },
  { path: 'evento/create-evento', component: CreateEventoComponent },
  { path: 'evento/update-evento/:idEvento', component: UpdateEventoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudEventoRoutingModule { }

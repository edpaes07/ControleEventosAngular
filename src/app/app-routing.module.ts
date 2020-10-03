import { ListaCategoriaRoutingModule } from './lista-categoria/lista-categoria-routing.module';
import { CrudParticipanteRoutingModule } from './crud-participante/crud-participante-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';
import { AppComponent } from './app.component';
import { CrudEventoRoutingModule } from './crud-evento/crud-evento-routing.module';

const routes: Routes = [];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CrudEventoRoutingModule,
    CrudParticipanteRoutingModule,
    ListaCategoriaRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsCategoriaComponent } from './details-categoria/details-categoria.component';
import { HomeCategoriaComponent } from './home-categoria/home-categoria.component';

const routes: Routes = [
  { path: 'categorias', redirectTo: 'lista-categoria/home-lista-categoria', pathMatch: 'full'},
  { path: 'lista-categoria/home-lista-categoria', component: HomeCategoriaComponent },
  { path: 'lista-categoria/details-lista-categoria/:IdCategoriaEvento', component: DetailsCategoriaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaCategoriaRoutingModule { }

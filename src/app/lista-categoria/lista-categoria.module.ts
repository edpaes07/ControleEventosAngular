import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ListaCategoriaRoutingModule } from './lista-categoria-routing.module';
import { HomeCategoriaComponent } from './home-categoria/home-categoria.component';
import { DetailsCategoriaComponent } from './details-categoria/details-categoria.component';
import { UiModule } from '../ui/ui.module';


@NgModule({
  declarations: [HomeCategoriaComponent, DetailsCategoriaComponent],
  imports: [
    CommonModule,
    ListaCategoriaRoutingModule,
    HttpClientModule,
    FormsModule,
    UiModule
  ]
})
export class ListaCategoriaModule { }

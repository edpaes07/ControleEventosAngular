import { LayoutComponent } from './ui/layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UiModule } from './ui/ui.module';
import { CrudParticipanteModule } from './crud-participante/crud-participante.module';
import { CrudEventoModule } from './crud-evento/crud-evento.module';
import { ListaCategoriaModule } from './lista-categoria/lista-categoria.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { FormsModule }   from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    CrudParticipanteModule,
    CrudEventoModule,
    ListaCategoriaModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

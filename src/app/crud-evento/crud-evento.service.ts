import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Evento } from './evento';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class CrudEventoService {

  private apiServer = "https://localhost:44389";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  create(evento): Observable<Evento> {
    return this.httpClient.post<Evento>(this.apiServer + '/api/Eventos', JSON.stringify(evento), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getById(id): Observable<Evento> {
    return this.httpClient.get<Evento>(this.apiServer + '/api/Eventos/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getAll(): Observable<Evento[]> {
    return this.httpClient.get<Evento[]>(this.apiServer + '/api/Eventos')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(idEvento, evento): Observable<Evento> {
    return this.httpClient.put<Evento>(this.apiServer + '/api/Eventos' + idEvento, JSON.stringify(evento), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(idEvento) {
    return this.httpClient.delete<Evento>(this.apiServer + '/api/Eventos' + idEvento, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  iniciarEvento(idEvento): Observable<Evento> {
    return this.httpClient.put<Evento>(this.apiServer + '/api/Eventos/Iniciar?idEvento=' + idEvento, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  cancelarEvento(idEvento): Observable<Evento>{
    console.log(this.apiServer + '/api/Eventos/Cancelar?idEvento=' + idEvento);
    return this.httpClient.put<Evento>(this.apiServer + '/api/Eventos/Cancelar?idEvento=' + idEvento, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  concluirEvento(idEvento): Observable<Evento> {
    return this.httpClient.put<Evento>(this.apiServer + '/api/Eventos/Concluir?idEvento=' + idEvento, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

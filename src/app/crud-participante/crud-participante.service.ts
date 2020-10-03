import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Participante } from './participante';

@Injectable({
  providedIn: 'root'
})
export class CrudParticipanteService {

  private apiServer = "https://localhost:44389";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  create(participante): Observable<Participante> {
    return this.httpClient.post<Participante>(this.apiServer + '/api/Participantes/', JSON.stringify(participante), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getById(id): Observable<Participante> {
    return this.httpClient.get<Participante>(this.apiServer + 'api/Participantes/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  getAll(): Observable<Participante[]> {
    return this.httpClient.get<Participante[]>(this.apiServer + '/api/Participantes')
  }

  updatePresenca(id, participante): Observable<Participante> {
    return this.httpClient.put<Participante>(this.apiServer + `/api/Participantes/Presenca?idParticipante=${id}`, JSON.stringify(participante), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.httpClient.delete<Participante>(this.apiServer + '/api/Participantes' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}

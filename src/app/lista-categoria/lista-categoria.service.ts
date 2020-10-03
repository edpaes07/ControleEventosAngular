import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Categoria } from './categoria';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class ListaCategoriaService {

  private apiServer = "https://localhost:44389";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getById(idCategoriaEvento): Observable<Categoria> {
    return this.httpClient.get<Categoria>(this.apiServer + '/api/Categorias/' + idCategoriaEvento)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getAll(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(this.apiServer + '/api/Categorias')
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


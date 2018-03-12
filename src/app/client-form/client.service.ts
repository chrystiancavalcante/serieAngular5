import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { Cadastro } from '../system/cadastro/cadastro';
import { Client } from '../client';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class ClientService {
    [x: string]: any;
  cadastroUrl = 'api/cadastro';  
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('clientService');
  }

  getCadastro (): Observable<Cadastro[]> {
    return this.http.get<Cadastro[]>(this.cadastroUrl)
      .pipe(
        catchError(this.handleError('getCadastro', []))
      );
  }

  searchCadastro(term: string): Observable<Cadastro[]> {
    term = term.trim();

    const options = term ?
     { params: new HttpParams().set('nome', term) } : {};

    return this.http.get<Cadastro[]>(this.cadastroUrl, options)
      .pipe(
        catchError(this.handleError<Cadastro[]>('searchCadastro', []))
      );
  }

  //////// Save methods //////////

  addCadastro (cadastro: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(this.cadastroUrl, cadastro, httpOptions)
      .pipe(
        catchError(this.handleError('addCadastro', cadastro))
      );
  }

  deleteCadastro (id: number): Observable<{}> {
    const url = `${this.cadastroUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteCadastro'))
      );
  }

  updateCadastro (cadastro: Cadastro): Observable<Cadastro> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Cadastro>(this.cadastroUrl, cadastro, httpOptions)
      .pipe(
        catchError(this.handleError('updateCadastro', cadastro))
      );
  }
}



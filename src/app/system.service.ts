import { Injectable } from '@angular/core';
import { MessageService} from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CadastroComponent } from './system/cadastro/cadastro.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SystemService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
     
    private SystemUrl = 'api/system';  // URL to web api

    /** GET System from the server */
    getCadastro (): Observable<System[]> {
      return this.http.get<System[]>(this.SystemUrl)
        .pipe(
          tap(System => this.log(`fetched System`)),
          catchError(this.handleError('getSystem', []))
        );
    }
  
    /** GET cadastro by id. Return `undefined` when id not found */
    getcadastroNo404<Data>(id: number): Observable<cadastro> {
      const url = `${this.SystemUrl}/?id=${id}`;
      return this.http.get<cadastro[]>(url)
        .pipe(
          map(System => System[0]), // returns a {0|1} element array
          tap(h => {
            const outcome = h ? `fetched` : `did not find`;
            this.log(`${outcome} cadastro id=${id}`);
          }),
          catchError(this.handleError<cadastro>(`getcadastro id=${id}`))
        );
    }
  
    /** GET cadastro by id. Will 404 if id not found */
    getcadastro(id: number): Observable<cadastro> {
      const url = `${this.SystemUrl}/${id}`;
      return this.http.get<cadastro>(url).pipe(
        tap(_ => this.log(`fetched cadastro id=${id}`)),
        catchError(this.handleError<cadastro>(`getcadastro id=${id}`))
      );
    }
  
    /* GET System whose name contains search term */
    searchSystem(term: string): Observable<cadastro[]> {
      if (!term.trim()) {
        // if not search term, return empty cadastro array.
        return of([]);
      }
      return this.http.get<cadastro[]>(`api/System/?name=${term}`).pipe(
        tap(_ => this.log(`found System matching "${term}"`)),
        catchError(this.handleError<cadastro[]>('searchSystem', []))
      );
    }
  
    //////// Save methods //////////
  
    /** POST: add a new cadastro to the server */
    addcadastro (cadastro: cadastro): Observable<cadastro> {
      return this.http.post<cadastro>(this.SystemUrl, cadastro, httpOptions).pipe(
        tap((cadastro: cadastro) => this.log(`added cadastro w/ id=${cadastro.id}`)),
        catchError(this.handleError<cadastro>('addcadastro'))
      );
    }
  
    /** DELETE: delete the cadastro from the server */
    deletecadastro (cadastro: cadastro | number): Observable<cadastro> {
      const id = typeof cadastro === 'number' ? cadastro : cadastro.id;
      const url = `${this.SystemUrl}/${id}`;
  
      return this.http.delete<cadastro>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted cadastro id=${id}`)),
        catchError(this.handleError<cadastro>('deletecadastro'))
      );
    }
  
    /** PUT: update the cadastro on the server */
    updatecadastro (cadastro: cadastro): Observable<any> {
      return this.http.put(this.SystemUrl, cadastro, httpOptions).pipe(
        tap(_ => this.log(`updated cadastro id=${cadastro.id}`)),
        catchError(this.handleError<any>('updatecadastro'))
      );
    }
  
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  
    /** Log a Systemervice message with the MessageService */
    private log(message: string) {
      this.messageService.add('Systemervice: ' + message);
    }
  }
  


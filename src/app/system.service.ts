import { Injectable } from '@angular/core';
import { MessageService} from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Cadastro } from './cadastro';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SystemService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
     
    private CadastroUrl = 'api/cadastro';  

    
    getCadastro (): Observable<Cadastro[]> {
      return this.http.get<Cadastro[]>(this.CadastroUrl)
        .pipe(
          tap(Cadastro => this.log(`fetched Cadastro`)),
          catchError(this.handleError('getCadastro', []))
        );
    }
  
    
    getCadastroNo404<Data>(id: number): Observable<Cadastro> {
      const url = `${this.CadastroUrl}/?id=${id}`;
      return this.http.get<Cadastro[]>(url)
        .pipe(
          map(Cadastro => Cadastro[0]), 
          tap(h => {
            const outcome = h ? `fetched` : `did not find`;
            this.log(`${outcome} cadastro id=${id}`);
          }),
          catchError(this.handleError<Cadastro>(`getcadastro id=${id}`))
        );
    }
  
    getcadastro(id: number): Observable<Cadastro> {
      const url = `${this.CadastroUrl}/${id}`;
      return this.http.get<Cadastro>(url).pipe(
        tap(_ => this.log(`fetched cadastro id=${id}`)),
        catchError(this.handleError<Cadastro>(`getcadastro id=${id}`))
      );
    }
 
    searchCadastro(term: string): Observable<Cadastro[]> {
      if (!term.trim()) {
      
        return of([]);
      }
      return this.http.get<Cadastro[]>(`api/Cadastro/?name=${term}`).pipe(
        tap(_ => this.log(`found Cadastro matching "${term}"`)),
        catchError(this.handleError<Cadastro[]>('searchCadastro', []))
      );
    }
  
    addcadastro (cadastro: Cadastro): Observable<Cadastro> {
      return this.http.post<Cadastro>(this.CadastroUrl, Cadastro, httpOptions).pipe(
        tap((cadastro: Cadastro) => this.log(`added cadastro w/ id=${cadastro.id}`)),
        catchError(this.handleError<Cadastro>('addcadastro'))
      );
    }
  
    deletecadastro (cadastro: Cadastro | number): Observable<Cadastro> {
      const id = typeof cadastro === 'number' ? cadastro : cadastro.id;
      const url = `${this.CadastroUrl}/${id}`;
  
      return this.http.delete<Cadastro>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted cadastro id=${id}`)),
        catchError(this.handleError<Cadastro>('deletecadastro'))
      );
    }
  
    updatecadastro (cadastro: Cadastro): Observable<any> {
      return this.http.put(this.CadastroUrl, cadastro, httpOptions).pipe(
        tap(_ => this.log(`updated cadastro id=${cadastro.id}`)),
        catchError(this.handleError<any>('updatecadastro'))
      );
    }
  
  
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        console.error(error);
  
       
        this.log(`${operation} failed: ${error.message}`);
  
      
        return of(result as T);
      };
    }
  
  
    private log(message: string) {
      this.messageService.add('SystemService: ' + message);
    }
  }
  


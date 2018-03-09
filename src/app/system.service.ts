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
     
    private SystemUrl = 'api/system';  

    
    getSystem (): Observable<System[]> {
      return this.http.get<System[]>(this.SystemUrl)
        .pipe(
          tap(System => this.log(`fetched System`)),
          catchError(this.handleError('getSystem', []))
        );
    }
  
    
    getcadastroNo404<Data>(id: number): Observable<cadastro> {
      const url = `${this.SystemUrl}/?id=${id}`;
      return this.http.get<cadastro[]>(url)
        .pipe(
          map(System => System[0]), 
          tap(h => {
            const outcome = h ? `fetched` : `did not find`;
            this.log(`${outcome} cadastro id=${id}`);
          }),
          catchError(this.handleError<cadastro>(`getcadastro id=${id}`))
        );
    }
  
    getcadastro(id: number): Observable<cadastro> {
      const url = `${this.SystemUrl}/${id}`;
      return this.http.get<cadastro>(url).pipe(
        tap(_ => this.log(`fetched cadastro id=${id}`)),
        catchError(this.handleError<cadastro>(`getcadastro id=${id}`))
      );
    }
 
    searchSystem(term: string): Observable<cadastro[]> {
      if (!term.trim()) {
      
        return of([]);
      }
      return this.http.get<cadastro[]>(`api/System/?name=${term}`).pipe(
        tap(_ => this.log(`found System matching "${term}"`)),
        catchError(this.handleError<cadastro[]>('searchSystem', []))
      );
    }
  
    addcadastro (cadastro: cadastro): Observable<cadastro> {
      return this.http.post<cadastro>(this.SystemUrl, cadastro, httpOptions).pipe(
        tap((cadastro: cadastro) => this.log(`added cadastro w/ id=${cadastro.id}`)),
        catchError(this.handleError<cadastro>('addcadastro'))
      );
    }
  
    deletecadastro (cadastro: cadastro | number): Observable<cadastro> {
      const id = typeof cadastro === 'number' ? cadastro : cadastro.id;
      const url = `${this.SystemUrl}/${id}`;
  
      return this.http.delete<cadastro>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted cadastro id=${id}`)),
        catchError(this.handleError<cadastro>('deletecadastro'))
      );
    }
  
    updatecadastro (cadastro: cadastro): Observable<any> {
      return this.http.put(this.SystemUrl, cadastro, httpOptions).pipe(
        tap(_ => this.log(`updated cadastro id=${cadastro.id}`)),
        catchError(this.handleError<any>('updatecadastro'))
      );
    }
  
   
    
     @param operation 
     @param result 
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        console.error(error);
  
       
        this.log(`${operation} failed: ${error.message}`);
  
      
        return of(result as T);
      };
    }
  
  
    private log(message: string) {
      this.messageService.add('Systemervice: ' + message);
    }
  }
  


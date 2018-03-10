import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Cadastro } from '../cadastro';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  private searchTerms = new Subject<string>();

  cadastro$: Observable<Cadastro[]>;
  constructor(private systemService: SystemService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.cadastro$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.systemService.searchCadastro(term)),
    );
  }

}


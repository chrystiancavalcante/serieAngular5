import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../../cadastro';
import { CadastroService } from './cadastro.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  providers: [ CadastroService ],
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  [x: string]: any;
  
  cadastro: Cadastro[]
  editCadastro: Cadastro;
  title= "Cadastro"

  constructor(private cadastroService: CadastroService) { 

  }

  ngOnInit() {
    this.getCadastro();
  }
  
  getCadastro(): void {
    this.cadastroService.getCadastro()
    .subscribe(cadastro => this.cadastro = cadastro);
  }

  add(nome: string): void {
    this.getCadastro= undefined;
    nome = nome.trim();
    if (!nome) { return; }

    const newCadastro: Cadastro = { nome } as Cadastro;
    this.cadastroService.addCadastro(newCadastro)
      .subscribe(cadastro => this.Cadastro.push(cadastro));
  }

  delete(cadastro: Cadastro): void {
    this.Cadastro = this.Cadastro.filter(h => h !== cadastro);
    this.cadastroService.deleteCadastro(cadastro.id).subscribe();

}
 
}

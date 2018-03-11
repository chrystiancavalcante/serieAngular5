import { Component, OnInit } from '@angular/core'
import { Client } from '../client'
import { ClientService } from './client.service';
import {  Cadastro } from '../system/cadastro/cadastro';


@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  providers: [ ClientService ],
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
 
  CadastroService: any;

  
  title=' Cadastro de Cliente '
  Cadastro: Cadastro[];
  editCadastro: Cadastro; 

  constructor(private ClientService: ClientService) { }

  ngOnInit() {
   
  }


  add(nome: string): void {
    this.editCadastro = undefined;
    nome = nome.trim();
    if (!name) { return; }

    const newCadastro: Cadastro = { nome } as Cadastro;
    this.ClientService.addHero(newCadastro)
      .subscribe(cadastro => this.Cadastro.push(cadastro));
  }

  delete(cadastro: Cadastro): void {
    this.Cadastro = this.Cadastro.filter(h => h !== cadastro);
    this.ClientService.deleteCadastro(cadastro.id).subscribe();
 
  }

  edit(cadastro) {
    this.editCadastro = cadastro;
  }

  update() {
    if (this.editCadastro) {
      this.CadastroService.updateCadastro(this.editCadastro)
        .subscribe(cadastro => {
          const ix = cadastro ? this.Cadastro.findIndex(h => h.id === cadastro.id) : -1;
          if (ix > -1) { this.Cadastro[ix] = cadastro; }
        });
      this.editCadastro = undefined;
    }
  }
}




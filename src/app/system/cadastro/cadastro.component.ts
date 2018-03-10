import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../../cadastro';
import { SystemService } from '../../system.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  title='Lista de Cliente';
  titleModal='Cadastrar';
  cadastro: Cadastro[];

  constructor(private systemService: SystemService) { 

  }

  ngOnInit() {
    this.getCadastro();
  }
  
  getCadastro(): void {
    this.systemService.getCadastro()
    .subscribe(cadastro => this.cadastro = cadastro);
  }

  delete(cadastro: Cadastro): void {
    this.cadastro = this.cadastro.filter(h => h !== cadastro);
    this.systemService.deletecadastro(cadastro).subscribe();
  }

}
 


import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../../cadastro';
import { SystemService } from '../../system.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  cadastro: Cadastro[]
  title= "Lista de Clientes"

  constructor(private systemService: SystemService) { 

  }

  ngOnInit() {
    this.getCadastro();
  }
  
  getCadastro(): void {
    this.systemService.getCadastro()
    .subscribe(cadastro => this.cadastro = cadastro);
  }

  add(cadastro: string): void {
    cadastro = cadastro.trim();
    if (!cadastro) { return; }
    this.systemService.addcadastro( cadastro as Cadastro )
      .subscribe(cadastro => {
        this.cadastro.push(cadastro);
      });
  }

  delete(cadastro: Cadastro): void {
    this.cadastro = this.cadastro.filter(h => h !== cadastro);
    this.systemService.deletecadastro(cadastro).subscribe();
  }

}
 


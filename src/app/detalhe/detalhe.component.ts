import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Cadastro } from '../cadastro';
import { SystemService } from '../system.service';


@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {
  @Input() Cadastro: Cadastro;

  constructor(
    private route: ActivatedRoute,
    private SystemService: SystemService,
    private location: Location
  ) { }

  ngOnInit() {
  }
  
  getCadastro(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.SystemService.getcadastro(id)
      .subscribe(Cadastro => this.Cadastro = Cadastro);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.SystemService.updatecadastro(this.Cadastro)
      .subscribe(() => this.goBack());
  }
}


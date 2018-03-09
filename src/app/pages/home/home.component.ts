import { Component, OnInit, Input } from '@angular/core';
import { CadastroComponent } from '../../system/cadastro/cadastro.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor() { }
  
  ngOnInit() {
  }
  
  @Input() home: HomeComponent;
 
}
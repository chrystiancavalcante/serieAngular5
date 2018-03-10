import { Component, OnInit } from '@angular/core'
import { Client } from '../client'


@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  
  title=' Cadastro de Cliente '
  model = new Client()
  submitted = false
  onSubmit() { this.submitted = true; }
  get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit() {
  }

}

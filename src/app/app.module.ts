import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule }    from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { VendaComponent } from './system/venda/venda.component';
import { CadastroComponent } from './system/cadastro/cadastro.component';
import { EstoqueComponent } from './system/estoque/estoque.component';
import { SystemService } from './system.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopoAppComponent } from './topo-app/topo-app.component';
import { MenuComponent } from './menu/menu.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    VendaComponent,
    EstoqueComponent,
    MessagesComponent,
    DashboardComponent,
    TopoAppComponent,
    MenuComponent,
    DetalheComponent,
    PesquisaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule . forRoot ( InMemoryDataService ),
    FormsModule
  ],
  providers: [SystemService, MessageService],
  bootstrap: [AppComponent]
})


export class AppModule { }

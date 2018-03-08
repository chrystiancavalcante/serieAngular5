import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { SystemComponent } from './pages/system/system.component';
import { VendaComponent } from './system/venda/venda.component';
import { EstoqueComponent } from './system/estoque/estoque.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    SystemComponent,
    VendaComponent,
    EstoqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

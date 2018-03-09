import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { AboutComponent} from './pages/about/about.component';
import { HomeComponent} from './pages/home/home.component';
import { CadastroComponent} from './system/cadastro/cadastro.component';
import { EstoqueComponent} from './system/estoque/estoque.component';
import { VendaComponent} from './system/venda/venda.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'estoque', component: EstoqueComponent },
  { path: 'venda', component: VendaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

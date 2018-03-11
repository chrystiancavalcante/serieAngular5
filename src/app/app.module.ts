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
import { CadastroComponent } from './system/cadastro/cadastro.component';
import { SystemService } from './system.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopoAppComponent } from './topo-app/topo-app.component';
import { MenuComponent } from './menu/menu.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ConfigComponent } from './config/config.component';
import { HttpErrorHandler }     from './http-error-handler.service';
import { PackageSearchComponent } from './package-search/package-search.component';
import { httpInterceptorProviders } from './http-interceptors/index';
import { AuthService } from './auth.service';
import { RequestCache, RequestCacheWithMap } from './request-cache.service';
import { HttpClientXsrfModule } from '@angular/common/http';

@NgModule({
  declarations: [
  
    AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    MessagesComponent,
    DashboardComponent,
    TopoAppComponent,
    MenuComponent,
    ClientFormComponent,
    ConfigComponent,
   
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),

      HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, {
          dataEncapsulation: false,
          passThruUnknownUrl: true,
          put204: false // return entity after PUT/update
        }
      )
  ],

  providers: [SystemService, MessageService, AuthService,
    HttpErrorHandler,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders],
  bootstrap: [AppComponent]
})


export class AppModule { }

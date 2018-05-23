import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MeuComponente2Component } from './meu-componente2/meu-componente2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
//import { MeuComponenteComponent } from './meu-componente/meu-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuComponente2Component,
    NavbarComponent,
    UsuarioFormComponent
	//MeuComponenteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

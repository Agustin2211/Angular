import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaDeEmpleadosComponent } from './components/lista-de-empleados/lista-de-empleados.component';
import { CantidadDeEmpleadosComponent } from './components/lista-de-empleados/cantidad-de-empleados/cantidad-de-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeEmpleadosComponent,
    CantidadDeEmpleadosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listCitas: any[] = [];

  agregarCita(cita: any){
    this.listCitas.push(cita);
  }

  eliminarCitaListado(i: number){
    this.listCitas.splice(i, 1);
  }
}

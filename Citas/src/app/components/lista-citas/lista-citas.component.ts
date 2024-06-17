import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent {
  @Input() listadoCitas: any;
  @Output() citaEliminada = new EventEmitter<number>();

  eliminarCita(i: number){
    this.citaEliminada.emit(i);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cantidad-de-empleados',
  templateUrl: './cantidad-de-empleados.component.html',
  styleUrls: ['./cantidad-de-empleados.component.css']
})
export class CantidadDeEmpleadosComponent {

  radioButtonSeleccionado = "todos";

  //Inputs
  @Input() todos: number;
  @Input() masculino: number;
  @Input() femenino: number;

  //Output
  @Output() countRadioButtonChange = new EventEmitter<string>();

  constructor(){
    this.todos = 0;
    this.masculino = 0;
    this.femenino = 0;
  }

  radioChange(): void {
    this.countRadioButtonChange.emit(this.radioButtonSeleccionado);
  }

}

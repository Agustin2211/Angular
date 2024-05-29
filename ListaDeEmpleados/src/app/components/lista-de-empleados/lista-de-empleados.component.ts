import { Component } from '@angular/core';
import { empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-lista-de-empleados',
  templateUrl: './lista-de-empleados.component.html',
  styleUrls: ['./lista-de-empleados.component.css']
})
export class ListaDeEmpleadosComponent {

  listEmpleados: empleado[] = [
    {
      legajo: 1,
      nombre: 'Juan',
      apellido: 'Gonzalez',
      sexo: 'Masculino',
      puesto: 'Contador',
      salario: 750000,
    },
    {
      legajo: 123,
      nombre: 'Pedro',
      apellido: 'Torres',
      sexo: 'Masculino',
      puesto: 'Mano de Obra',
      salario: 550000,
    },
    {
      legajo: 5785,
      nombre: 'Marta',
      apellido: 'Perez',
      sexo: 'Femenino',
      puesto: 'Ingeniera',
      salario: 850000,
    }

  ];

  constructor() {}


}

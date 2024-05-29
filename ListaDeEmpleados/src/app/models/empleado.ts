export class empleado{
  legajo: number;
  nombre: string;
  apellido: string;
  sexo: string;
  puesto: string;
  salario: number;

  constructor(legajo: number, nombre: string, apellido: string, sexo: string, puesto: string, salario: number){
    this.legajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.sexo = sexo;
    this.puesto = puesto;
    this.salario = salario;
  }
}

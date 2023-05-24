import { empleado } from "./empleado.js";

export class Director extends empleado {
constructor(nombre,dni,salario) {
  super(nombre,dni,salario);
}


_verBonoficacion(){
 const bono = 10 ;
  return super._verBonoficacion(bono);
}
}
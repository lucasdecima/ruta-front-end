import { empleado } from "./empleado.js";

export class Gerente extends empleado {
constructor(nombre,dni,salario) {
  super(nombre,dni,salario);
}


_verBonoficacion(){
  const bono = 5 ;
  return super._verBonoficacion(bono);
}
}
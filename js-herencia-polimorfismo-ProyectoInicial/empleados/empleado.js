export class empleado  {

#nombre;
#dni;
#salario;
#clave;



  constructor(nombre , dni, salario) {
this.#nombre= nombre ;
this.#dni = dni;
this.#salario=salario ;
this.#clave = "";
  }

asignarclave(clave){
this.#clave= clave ;
}

autenticable  (clave){
  return clave ==  this.#clave;
}


verBonoficacion(){
  return this.#salario ;
}

  _verBonoficacion (bono) {
    return this.#salario + this.#salario*bono/100 ;
  }
}
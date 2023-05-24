import {  cliente } from "./cliente.js";
// con el export indicamos que vamos a exportar dicha clase.
export  class cuentacorriente {
    #cliente;  
    numero;
    #saldo;
    agencia;
    static cantidadCuentas=0; // indicamos que el valor sera estatico cada vez que se cree una instancia, sera comun para todas las instancias 

    set cliente (valor){ 
      if (valor instanceof  cliente)
      this.#cliente = valor ;
    }

    get cliente () {
      return this.#cliente;
    }

    constructor( cliente, numero  , agencia){ // con la funcion constructor dentro de la clase indicamos los valores por defecto que van a tener las instancias en los nuevos modelos que creemos.
        this.cliente = cliente;
        //this.#cliente = null ; //El valor null es un literal de Javascript que representa intencionalmente un valor nulo o "vacío"
        this.numero = numero;
        this.agencia =agencia;
        this.#saldo = 0; 
        cuentacorriente.cantidadCuentas++; // sumamos las cunetas con su somador y su padre
    }

    depositosencuenta(valor){
      if (valor > 0) // con este if le indicamos a,los depositos que no se aceptaran numeros negativos.
        this.#saldo +=  valor; // el this define la cuenta corriente actual
      return this.#saldo;
      }

    retirardecuenta(valor){
      if(valor <= this.#saldo) //con este if indicamos que  el retiro no puede superar nuestro saldo asi la cuenta no quedaa en negativo.
        this.#saldo -= valor ;// el this define la cuenta corriente actual
        return this.#saldo;
      }

      versaldo() { // con esta funcion la hacemos para que nos muetre nuestro saldo despues de hacer las operaciones de depositos y retiros.
        return this.#saldo;
      }

      transferirparacuenta(valor , cuentadestino){ //creamos la funcion de tranferir y le indicamos los parametros
        this.retirardecuenta(valor); // en esta this retiramos un valor 
        cuentadestino.depositosencuenta(valor); // y a la cuenta de destino le depositamos ese valor.
      }
}


export class Cuenta {
  #cliente;
  #saldo;  

  constructor (/*tipo ,*/ cliente,numero,agencia,saldo) {
    /*this.tipo = tipo; // se lo agregamos para saber de que tipo sera la cuenta.*/
 
 
    if (this.constructor == Cuenta) { // con la  creacion de este if estamos indicando que si se crea una nueva instancia de la clase padrwe cuenta , seria una mala practica ya que solo se puede extender con un "extendens"
      throw new error("no se debe instanciar objetos de la clase cuenta (clase padre)");// con la creacion del throw new error(); se indica que una vez que se llaga a el se detendra la ejecucuion del programa y mostrara el mensaje de error.
   //   console.log("no se debe insta nciar objetos de la clase cuenta")
    }

    this.#cliente = cliente ;
    this.numero = numero;
    this.agencia= agencia;
    this.#saldo = saldo ;
  }


set cliente (valor){ 
      if (valor instanceof  cliente)
      this.#cliente = valor ;
    }

    get cliente () {
      return this.#cliente;
    }



depositosencuenta(valor){
      if (valor > 0) // con este if le indicamos a,los depositos que no se aceptaran numeros negativos.
        this.#saldo +=  valor; // el this define la cuenta corriente actual
      return this.#saldo;
      }

    retirardecuenta(valor,comision){
      throw new error("debe implementar el metodo retirar de cuenta en su clase");
    } 

  _retirardecuenta(valor,comision){ //con  _retirardecuenta(valor,comision) estamos haciendo privado al metodo.
      valor = valor * (1+comision/100); // aca estamos indicando la division para descontar la comision
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
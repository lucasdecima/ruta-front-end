import { Cuenta } from "../cuenta/Cuenta.js";

export  class CuentaAhorro  extends Cuenta{ // con la palabra extends le estamos indicando que es es una herencia de la clase cuenta .
   constructor( cliente, numero  , agencia,saldo){ 
    super (cliente,numero,agencia,saldo);
    }
       retirardecuenta(valor){
     /*  if (this.tipo == "corriente") // aca indicamos que si el tipo es igual a cuentas corriente se aplicara la comision.
          valor = valor * 1.05; //comision del banco.
        else if (this.tipo == "Ahorro") */
      
        super._retirardecuenta(valor,2);
      }
}
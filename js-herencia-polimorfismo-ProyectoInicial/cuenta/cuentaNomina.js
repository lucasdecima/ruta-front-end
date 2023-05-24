import { Cuenta } from "../cuenta/Cuenta.js";

export class cuentaNomina extends Cuenta {
constructor( cliente, numero  , agencia,saldo){ 
    super (cliente,numero,agencia,saldo);
    }

    retirardecuenta(valor){
          super._retirardecuenta(valor,1);
      }
}
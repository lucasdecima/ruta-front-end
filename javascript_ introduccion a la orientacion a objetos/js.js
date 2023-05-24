//importando classes 
import { cliente } from "./cliente.js";
import { cuentacorriente } from "./cuentacorriente.js";
/* 
// con new cliente() le estamos indicando a la const que vamos a crear una nueva instancia de la clase cliente.
const cliente1 = new cliente()
cliente1.nombrecliente = "lucas";
cliente1.dnicliente = 38510106;

// con new cuentacorriente() le estamos indicando a la const que vamos a crear un nueva instancia de la clase cuentacorriente.
const cuentacorriente1 = new cuentacorriente()
cuentacorriente1.numero = 0912;
cuentacorriente1.saldo = 1400;



const cliente2 = new cliente()
cliente2.nombrecliente = "juan";
cliente2.dnicliente = 44444;

const cuentacorriente2 = new cuentacorriente()
cuentacorriente2.numero = 222222;
cuentacorriente2.saldo = 1400;


console.log(cliente1);
console.log(cuentacorriente1);
console.log(cliente2);
console.log(cuentacorriente2);
cuentacorriente2.depositosencuenta(500);// llamamos a la cuenta deseada a sumar y leagregamos la funcion depositoencuenta con el valor que quierasmos sumar.
cuentacorriente2.depositosencuenta(100);// llamamos a la cuenta deseada a sumar y leagregamos la funcion depositoencuenta con el valor que quierasmos sumar.
cuentacorriente1.depositosencuenta(200);// llamamos a la cuenta deseada a sumar y leagregamos la funcion depositoencuenta con el valor que quierasmos sumar.
cuentacorriente1.depositosencuenta(50);// llamamos a la cuenta deseada a sumar y leagregamos la funcion depositoencuenta con el valor que quierasmos sumar.

console.log(cuentacorriente2.saldo);
console.log(cuentacorriente1.saldo);
*/

// EJEMPLO 1 
const cliente1 = new  cliente("ignacio" , 91218);
//console.log(cliente1);


const cuentadelucas = new cuentacorriente(cliente1,12121994,"bna+");
//console.log(cuentadelucas)
/*cuentadelucas.numero = 12121994;
cuentadelucas.agencia = "bna+"
cuentadelucas.depositosencuenta(200);
//cuentadelucas.retirardecuenta(50);
const saldo = cuentadelucas.versaldo();
//console.log(`el saldo actual en (cuenta de lucas) ${saldo}`);

cuentadelucas.cliente= cliente1 ; // se llama al cliente de la cunetadelucas y le asignamos el nuevo objeto y de esta manera unimos las const  cuentadelucas y la const decima.
//console.log(cuentadelucas.cliente );
console.log(`el saldo actual en (cuenta de lucas) ${saldo}`);*/



//   EJEMPLO 2

const cliente2= new cliente("barrionuevo" , 121294);
//console.log(cliente2);


const cuentadepaula = new cuentacorriente(cliente2,11170307,"bbwa frances");
//console.log(cuentadepaula);
/*cuentadepaula.numero = 11170307;
cuentadepaula.agencia ="bbwa frances"
cuentadepaula.depositosencuenta(200);
//cuentadepaula.retirardecuenta(200);
cuentadelucas.transferirparacuenta(100 , cuentadepaula);// aca desde la cuentadelucas le tranferimos hacia cuentadepaula el valor de 100,
const guita = cuentadepaula.versaldo();
//console.log(`el saldo actual es ${guita}`); 

cuentadepaula.cliente = cliente2 ; //  // se llama al cliente de la cunetadelucas y le asignamos el nuevo objeto y de esta manera unimos las const  cuentadepaula y la const ceci
//console.log(cuentadepaula.cliente); 


console.log(`el saldo actual en (cuenta de paula) ${guita}`); // aca consultamos el saldo de paula 
const saldolucas = cuentadelucas.versaldo(); // aca creamos otra const para ver el saldo actual de la cuenta de lucas
console.log(`el saldo actual en (cuenta de lucas) ${saldolucas}`); // aca lo llamamos y verificamos que el traspaso se hizo efectivamente

*/ 
console.log(cuentacorriente.cantidadCuentas); // aca estamos consultando la cantidad de cuentas que se han creado








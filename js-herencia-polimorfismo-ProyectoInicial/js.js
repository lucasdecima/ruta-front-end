//importando classes 
import { cliente } from "./cliente.js";
//import { cuentacorriente } from "./cuenta/cuentacorriente.js";
//import { CuentaAhorro } from "./cuenta/CuentaAhorro.js";
//import { cuentaNomina } from "./cuenta/cuentaNomina.js";
import { empleado } from "./empleados/empleado.js";
import { Director } from "./empleados/Director.js";
import { Gerente } from "./empleados/Gerente.js";
import { sistemadeautenticacion } from "./empleados/sistemaAutenticacion.js";




// EJEMPLO 1 
const cliente1 = new  cliente("ignacio" , 91218);
cliente1.asignarclave("burritopsa");
console.log(sistemadeautenticacion.login(cliente1,"burritopsa"))
//const cuentadelucas = new cuentacorriente(cliente1,12121994,"bna+");




//   EJEMPLO 2

const cliente2= new cliente ("barrionuevo" , 121294);
//const cuentadepaula = new   cuentacorriente (cliente2,11170307,"bbwa frances");


//const CuentaAhorrolucas = new CuentaAhorro(cliente2 ,"45", "macro" ,0);
/*
//console.log(CuentaAhorrolucas);
cuentadelucas.depositosencuenta(150);
console.log(cuentadelucas.versaldo());
cuentadelucas.retirardecuenta(50);
console.log(cuentadelucas.versaldo());

console.log(CuentaAhorrolucas);

CuentaAhorrolucas.depositosencuenta(200);
console.log(CuentaAhorrolucas.versaldo());
CuentaAhorrolucas.retirardecuenta(50);
console.log(CuentaAhorrolucas.versaldo());


console.log(cuentadelucas);
console.log(cuentadepaula);*/
// const cuentasimple = new Cuenta(cliente1,2233,"patagonia",0) // es un ejemplo de que no se puede crear una nueva instancia de la clase padre .
// console.log(cuentasimple); //aca llamamos a la consola para que nos muestre el throw new error(), y se detenga la ejecucion del programa.


//const cuentanominalucas = new cuentaNomina(cliente2,912,"santander rio",0);
//cuentanominalucas.depositosencuenta(150);
//console.log(cuentanominalucas.versaldo());
//cuentanominalucas.retirardecuenta(50);
//console.log(cuentanominalucas.versaldo());




const empleados = new empleado("lucas decima ", 38510106,10000) ;
empleados.asignarclave("12345")
console.log(sistemadeautenticacion.login(empleados , "12345"));


const gerente1 = new Gerente("cecilia barrionuevo", 12121994,12000);
gerente1.asignarclave("123321") ;
console.log(sistemadeautenticacion.login(gerente1 , "12345"));

const director1 = new Director("J U",77777,16000);
director1.asignarclave("3333") ;
console.log(sistemadeautenticacion.login(director1 , "3333"));
// console.log(empleados.verBonoficacion());
// console.log(gerente1._verBonoficacion());
// console.log(director1._verBonoficacion());


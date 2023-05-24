console.log("---------arrays---------")
/* 
// definicion de una lista con tipo de dato alfa numerico 
const ciudades = new Array("tucuman" , "salta" , "lastenia", "la banda");
console.log(ciudades );
// definicion  de lista abreviada
const paises = ["arg" , "argelia","peru","colombia"];
console.log(paises);

  paises.push("brasil");
  ciudades.push("las talitas");
 // paises.pop(); pop sirve para eliminar el ultimo item de la lista de nuestro array.
paises.unshift("ecuador"); //unshift sirve para agregar datos al inicio de la lista del array 

//llamar a un dato especifico de la lista segun su posicion 
console.log(paises[0]);
console.log(ciudades[1]);

ciudades.splice(1,2, "famailla","alderetes"); // la funcion splice sirve para borrar y agregar elementos a la lista y funciona de la siguiente manera (desde que pos inicia a borrar , cuantos elementos desea borrar , entre "" el dato a agregar o los datos si fueran mas de uno )
console.log(ciudades);
*/

/*
const paises = ["arg" , "argelia","peru","colombia", "uruguay" , "chile", "mexico"];
const ciudades = new Array("tucuman" , "salta" , "lastenia", "la banda");

//const lugares = paises.length; //la funcion length sirve para recorrer el total del array.

//console.log(paises);
paises.shift(); // shift sirve para borrar el primer elemento de la lista 
console.log(paises);

const paisesfiltrados = paises.filter((e) => e === "argelia");// FILTER sirve para filtrar y buscar un elemento dentro del array y como consecuencia se crea un nuevo array con ese dato filtrado ej: paises.filter((e) => e === "argelia")..
console.log(paisesfiltrados);

console.log(paises.join("//")); //JOIN sirve para unir todos los datos de los arrays y separarlos por lo que nosotros le indiquemos dentro de las "" EJ: console.log(paises.join("//"));

console.log(paises.sort()); //SORT   sirve para ordenar los datos del array en orden alfabetico.

console.log(`mexico esta en la posicion ${paises.indexOf("mexico")}`); //INDEXof SIRVE PARA IDENTIFICAR UN ELEMENTO EN ESPECIFICO Y  DARNOS LA POSICION EN LA QUE SE ENCUENTRA.

const unircyp = paises.concat(ciudades); //CONCAT sirve para unir los arrays de que queden en uno solo todos los datos
console.log(unircyp);  */


console.log("----------operadores logicos--------")

const ciudaddestino = "la banda";
const ciudades = new Array("tucuman" , "salta" , "lastenia", "la banda");
/*
let pasajero = 18 ;
let estaacompanado = true ;
let tienepasaporte = true ;
let estacasado = false ;

console.log(`verificando pasajes para ${ciudaddestino}`)

if (ciudades.indexOf(ciudaddestino) > -1  && pasajero >=18 && tienepasaporte && !estacasado){
  console.log("pasaje para solteros  disponible")
} else  {
  console.log("no podes viajar pendejo ")
}

 */
switch (ciudaddestino) {
  case "tucuman":
    console.log(500);
    break;
  case "salta":
    console.log(400);
    break;
   case "lastenia":
    console.log(10);
    break;
  case "la banda":
    console.log("corre chicooo");
    break;

  default: console.log("elegir una o no viajas compadre")
    break;
}



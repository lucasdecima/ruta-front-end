import checkcomplete from "./components/checkcomplete.js"; //siempre recordar poner el .JS al final del archivo
import deleteicon from "./components/deleteicon.js"; //siempre recordar poner el .JS al final del archivo

//con IMPORT lo que estamos haciendo es relacionar los archivos js hacia este principal.
// ademas se debe poner el type="module" en el script del html 




const boton = document.querySelector("[data-form-btn]"); // document.querySelector("[data-form-btn]") es para traer los datos del boton html, la mejor manera es usar los data atributes y siempre van en el queryselector dentro de ("[data-atribute]"). 

const createtask =   (evento) => {
  evento.preventDefault(); // el .preventDefault() sirve para anular el comportamiento por defecto que hace la pagina (en este caso recargar y borrar el dato del input)
const input = document.querySelector("[data-input-tarea]") // hace referencia a el cuadro donde se ingresaran los datos
const value = input.value ; // el .value sirve para traer el valor o dato del elemento 
const list = document.querySelector("[data-list]"); //sera el elemento padre que va a contener todas las li que creemos.
const task = document.createElement("li"); //.createElement(""); sirve para crear un elemento html, en este caso un li
//querySelector("[data-task]");// hace referencia al espacio donde se va a agregar los datos que vayamos ingresando
task.classList.add("card");  //.classList.add("card"); sirve para agregarle una clase css al elemento que los precede y dentro de ("") el nombre de la clase igual a como esta en el archivo css.
input.value = ""; // al poner input.value = "" ; estamos indicando que el input se quede vacio cada vez que enviemos algun dato.


const taskcontent = document.createElement("div");
taskcontent.appendChild(checkcomplete());
// ${checkcomplete()} ;8 en la linea 17 lo usamos para llamar la funcion del icono que creamos abajo en la linea  34
const titletask = document.createElement("span");//  aca le indicamos que queremos crear un span.
titletask.classList.add("task");// a ese espan creado anteriormente le agregamos estilos css.
titletask.innerText = value; // y con .innerText = value; le estamos agragando el contenido a ese span que creamos anteriormente. 
taskcontent.appendChild(titletask); // le agregamos todo el espan creado al elemento contenedor "padre"
/*const content = `
         
            <i class="fas fa-trash-alt trashIcon icon"></i>`  */            //en esta constante estamos convinando html con funciones js 
//task.innerHTML = content;  la propiedad .innerHTML sirve para poder asiganarle codigo html
task.appendChild(taskcontent);
task.appendChild(deleteicon());
list.appendChild(task); //  .appendChild() sirve para agregar le un hijo al elemento que lo preceda en este caso list y dentro de los () el elemento que se le va a gregar 

}



//addEventListener() sirve para ejecutar algo cuando el usuario le da click , es una funcion y va a recibir 2 parametros el 1ro  es cual evento quieres escuchar y 2do que es lo que queremos que pase cuando el usuario genere esta accion EJ: boton.addEventListener("click" , function () {console.log("agregar lista")})
boton.addEventListener("click" , createtask );







//IIFE inmediately inviked function expression :   ( () => {} )  ()
console.log("----IIFE--------")

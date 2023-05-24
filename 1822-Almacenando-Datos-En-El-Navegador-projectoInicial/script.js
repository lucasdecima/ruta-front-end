import { addTask } from "./components/addtask.js";
import { displaytask } from "./components/readtasks.js";

const btn = document.querySelector('[data-form-btn]'); // obtenemos el boton de html



//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask); // funcion que realizara el boton despues de hacer click


displaytask();// funcion que se encarga de leer los datos del local storage al iniciar la pagina



import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displaytask } from './readtasks.js';

//FUNCION
export const addTask = (evento) =>  {
            evento.preventDefault();

            const list = document.querySelector('[data-list]');
            const input = document.querySelector('[data-form-input]');
            const calendar = document.querySelector("[data-form-date]");//aca obtenemos que elemento html que vamos a extraer.
            //console.log(calendar); // para verificar la obtencion del imput. 
   
            const value = input.value;
            const date = calendar.value;// aca obtenemos el valor que se ingresa al input
            //console.log(date); //para verificar
            const dateformat = moment(date).format("DD/MM/YYYY");// en esta nueva const la hacemos para seleccionar el valor de date y darle el formato que le indicamos en format.
            //console.log(dateformat);// para verificar


  //PARA VALIDAR LOS DATOS INGRESADOS           
  if(value === "" || date === ""){ //si los datos on vacios 
    return; // aca le indicamos que se corte la ejecucion del programa
  };
    
  
    input.value = "";
    calendar.value= "";

  
  
    const taskobj = {
                     value,
                     dateformat,
                    };

    list.innerHTML= "";                
                    
                    
    const tasklist = JSON.parse(localStorage.getItem('tasks')) || [ ] ;
              //console.log(tasklist); 
              tasklist.push(taskobj);
              //  sessionStorage.setItem('task' , JSON.stringify(taskobj));//mantiena un areea de almacenamiento separada para cada origen que esta disponible mientras el navegador este abierto.
              // con .setItem('task' , JSON.stringify(taskobj) le estamos indicando asiganar a task la informacion del objeto y lo tranformamos en archivo json
              localStorage.setItem('tasks' , JSON.stringify(tasklist));// con localStorage hace lo mismo que sessionStorage pero persiste incluso cuando el navegador se cierre o reabra. 
              
              displaytask()
              
              //const task = createTask(taskobj);
              //list.appendChild(task); // aca indicamos que al elemento lista le agregamos el elemento task("li");
              
  }
  
  
  
  
  
  //FUNCION DE CREAR LA LISTA
  export const createTask = (  { value,dateformat } ) => {
               const task = document.createElement('li');
               task.classList.add('card');
//backticks
               const taskContent = document.createElement('div');
               //console.log(value,dateformat);//para obtener la informacion de ambos imputs
               const titleTask = document.createElement('span'); 
                     titleTask.classList.add('task');
                     titleTask.innerText = value;
                     taskContent.appendChild(checkComplete());
                     taskContent.appendChild(titleTask);
                     // task.innerHTML = content;
    
    
              const dateElement = document.createElement("span");// con el document.createElement("span") sirve para crear un elemnto html y entre comillas indicamos el elemento deseado.
                    dateElement.innerHTML = dateformat; // con .innerHTML es para agregar el contenido al elemento html que ya habiamos creado con document.createElement("").
              // aca creamos  los items que van dentro del input global 
              task.appendChild(taskContent);// este es el elemnto que engloba todo
              task.appendChild(dateElement);// agregamos el task.appendChild(dateElement) EN ESTA POSICION PORQUE QUEREMOS QUE ESTE ENTRE EL ELEMENTO PADRE Y EL BOTON DE BORRAR.
              task.appendChild(deleteIcon());// este es el elemento boton de eliminar
              return task; 
  };
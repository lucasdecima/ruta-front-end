import {  createTask } from "./addtask.js";
import { uniquedates } from "../services/date.js";
import dateelement  from "./dateElement.js";


// FUNCION PARA LEER LA INFORMACION QUE YA TENEMOS ALMACENADA EN NUESTRO LOCALSTORAGE
export const displaytask = () => {
             const list = document.querySelector("[data-list]"); // aca seleccionamos la lista general donde iran nuestos items
             //console.log(list);
             const tasklist = JSON.parse(localStorage.getItem("tasks")) ||  [ ]  ;//para entrar al localstorage y con .getItem obtener la informacion 
             //console.log(tasklist); para verificar
             


            const dates = uniquedates(tasklist);// a unificar fechas le pasamos como parametro la lista obtenida del localstorage
                  //console.log(tasklist);
                  //console.log(dates); // para mostrar los datosd el array pusheado
                  dates.forEach( date =>{ // aca recorremos el array con todos los datos ya agregados
                  //console.log(date);// para ver c|u de las fechas
                  
                const datemoment = moment(date, "DD/MM/YYYY");
                      //console.log(datemoment);
                  
                  list.appendChild(dateelement(date));
            
                  tasklist.forEach((task) => { //recorre el array tasklist y por cada uno de ellos va a realizar una funcion
                        //list.appendChild(dateelement(task.dateformat));
                        //console.log(task); // para visualizar los datos del array
                        //console.log(createTask(task)); // para unir los elementos html con los datos del array
                        const taskdate = moment(task.dateformat, "DD/MM/YYYY")
                                       //console.log(taskdate);

                        const diff = datemoment.diff(taskdate);
                                     //console.log(diff); 
                        if(diff === 0){
                                list.appendChild(createTask(task));// aca creamos y agregamos el elememnto a la lista

                        }     
                    });
            
                });

              
};
import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]")




const obtenerinformacion = () =>{
            const url = new URL(window.location);
            //console.log(url); nos muestra un objeto que es nuestra url y dentro de ella encontramos diferente informacion
            //console.log(url.searchParams.get("id")); // con el searchParams le estamos indicando que queremos buscar un parametro y con .get("id") le indicamos el nombre del parametro que buscamos y nos da como resultado el id 
          const id = url.searchParams.get("id"); //con esta c onst obtenemos el id.

            if(id === null) { //aca usamos la logica, si el resultado cuando enviemos la informacion es null. 
            window.location.href="/screens/error.html"// mostrar la imagen de error.
            }

            const nombre = document.querySelector("[data-nombre]")
            const email = document.querySelector("[data-email]")
            //console.log(nombre , email); para verificar las obtencion de los inputs anteriores


            clientServices.detallecliente(id)//para obtener la informacion json de la conexion con el servidor
            .then(perfil => { // luego de obtener esa informacion le decimos que...
              //console.log(perfil); // para verificar los datos recibidos del servidor en formato json
              nombre.value = perfil.nombre ;// aca le indicamos que en el valor de nuestro input iran los datos del perfil.nombre 
              email.value = perfil.email;//// aca le indicamos que en el valor de nuestro input iran los datos del perfil.email
            })
};

obtenerinformacion();


// FUNCION PARA OBTENER LOS DATOS DEL FORMULARIO DESPUES DE HABER SIDO EDITADO
formulario.addEventListener("submit" , (evento) => {
          evento.preventDefault(); // para anular el comportamiento por default 
          const url = new URL(window.location);
            //console.log(url); nos muestra un objeto que es nuestra url y dentro de ella encontramos diferente informacion
            //console.log(url.searchParams.get("id")); // con el searchParams le estamos indicando que queremos buscar un parametro y con .get("id") le indicamos el nombre del parametro que buscamos y nos da como resultado el id 
          const id = url.searchParams.get("id"); //con esta c onst obtenemos el id.          
  
  
           const nombre = document.querySelector("[data-nombre]").value;
           const email = document.querySelector("[data-email]").value;   
            //console.log(nombre , email);
            clientServices.actualizarcliente(nombre,email,id).then( () => {
              window.location.href = "/screens/edicion_concluida.html" ;
            })
          }   );
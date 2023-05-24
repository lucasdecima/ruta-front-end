import { clientServices } from "../service/client-service.js";


const crearnuevalinea = (nombre , email,id) => {
  //console.log(id);
            const linea = document.createElement("tr"); // creamos el elemento html tr.
            const contenido = /*creamos el contenido con las estructura html */`   
            <td class="td" data-td> ${nombre} </td>
            <td>${email}</td>
            <td>
              <ul class="table__button-control">
                <li>
                  <a href="../screens/editar_cliente.html?id=${id/*cuando le agregamos ?id=${id}  le estamos indicando el parametro que queremos individualizar que en este caso es el ID*/}" 
                  class="simple-button simple-button--edit">Editar</a>
                </li>
                <li>
                  <button class="simple-button simple-button--delete" type="button" id="${id}" >Eliminar</button>
                </li>
              </ul>
            </td>
          `;
          linea.innerHTML = contenido ; // aca a linea(tr) le añadimos contenido(la estructura html)
          //console.log(linea);// para ver los tr que ya habiamos creado.
          
          
          const btn = linea.querySelector("button");
          //console.log(linea.querySelector("button"));// para invidualizar los botones dentro de la estructura html que creamos.
          btn.addEventListener("click" , () => { // a ese boton le agregamos un .addEventListener() y le indicamos que cuando se haga click en el  
            const id = btn.id ; // aca individualizamos el id del boton (para cada boton sera uno diferente)
            //console.log("el click" , id ); // ejemplo solo para mostrar el id de cada boton
          clientServices.eliminarcliente(id).then((respuesta) => {
            console.log(respuesta);
          }).catch((err) => alert("ocurrio un error"));
          });


          return linea;
};

const table = document.querySelector("[data-table]"); // seleccionamos el tbody del archivo html con su data atribute



clientServices
.listaCllientes()
.then((data) =>{
 data.forEach((perfil) => {
  const nuevalinea =  crearnuevalinea(perfil.nombre , perfil.email,perfil.id);
    table.appendChild(nuevalinea); // con .appendChild(); agregamos un elemnto a la lista
  });
}).catch((error) => alert("ocurrio un error"));





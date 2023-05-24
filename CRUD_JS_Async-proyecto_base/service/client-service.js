




// abrir http (metodo , url)

/*
CRUD       -       METODOS HTTP

create       -->       POST
read         -->       GET
update     -->      PUT/PATCH
delete      -->       DELETE 
*/
//---------------------------METODO SIMPLIFICADO (fetch api)-----------------------------------
const listaCllientes = () => {
return fetch("http://localhost:3000/perfil").then((respuesta) => {
  return respuesta.json();
}); 
};
//FUNCION DE CREAR
const crearcliente = (nombre , email) => {// creamos la funcion y le pasamos los parametros que son los datos de los imputs nombre y email.
 return  fetch("http://localhost:3000/perfil" ,  //hacemos la conexion con nuestro servidor 
 {method : "POST" //aca le indicamos el metodo que queremos usar , en este caso es creat(POST).
, headers : {"content-type" : "application/json", //aca le agregamos un encabezado que debe ir por defecto
},
body : JSON.stringify( {nombre , email, id: uuid.v4()   } ),// con JSON.stringify(); indicamos que queremos tranformar los datos de un objeto en datos json.
}) ;
};



// FUNCION DE ELIMINAR
const eliminarcliente = (id) => { //para identificar cada id
//console.log("eliminar a --->" , id); 
  return  fetch(`http://localhost:3000/perfil/${id}` , //hacemos la conexion con nuestro servidor PERO lo ponemos en comillas invertidas y agregamos el parametro ID que es con el que vamos a trabajar
{
method: "DELETE"
})
}


//FUNCION PARA OBTENER LOS DETALLES DEL ID
const detallecliente = (id) =>{ //le pasamos el parametro id para obtener su informacion
return fetch(`http://localhost:3000/perfil/${id}`)//hacemos la conexion con nuestro servidor PERO lo ponemos en comillas invertidas y agregamos el parametro ID que es con el que vamos a trabajar
.then((respuesta) => respuesta.json()) // luego obtenemos la respuesta de la conexion y con .json() se la tranforma en archivo json.
};



const actualizarcliente = (nombre , email,id) => {
  return fetch( `http://localhost:3000/perfil/${id}` , 
              {
                    method: "PUT" ,
                    headers: {
                                    "content-type" : "application/json"  
                                   },
                    body : JSON.stringify( { nombre , email } ),
 }  )
           .then((respuesta) => respuesta)
           .catch((err) => console.log(err))  
  }




export const clientServices = {
  listaCllientes ,
  crearcliente,
  eliminarcliente,
  detallecliente,
  actualizarcliente,
};








// ------------------------------------------METODO LARGO----------------------------------
    /*  const promise =new Promise ( (resolve , reject) => {
    const http = new XMLHttpRequest(); //El objeto XMLHttpRequest se utiliza para intercambiar datos con un servidor.
//abrir http (metodo,url)
http.open("GET", "http://localhost:3000/perfil"); // el  .open();  inicializa una solicitud recién creada o reinicializa una existente. y debe recibir 2 parametros
          //aca le indicamos leer los datos de la url indicada
http.send(); // el .send();  se encarga de enviar la solicitud hacia el servidor que le indicamos en el  .open()


// con el .onload indicamos que una vez que terminamos de recibir una respuesta se va a ejecutar la funcion que le indiquemos acontinuacion 
http.onload = () => {
  const response = JSON.parse(http.response); //el .response representa la respuesta a una petición. que hicimos.
  //con JSON.parse(); indicamos que a esa respuesta que obtuvimos sea tranformada en formato javascript.
  if(http.status >= 400) {
    reject(response);
  } else {
    resolve(response);
  }
};
  } );

  return promise
};   */




import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit" , (evento) => {
  evento.preventDefault(); // esta funcion sirve para que el anular el comportamiento que el formulario trae por defecto.
  const nombre = document.querySelector("[data-nombre]").value // estamos obteniendo el valor que se ingresa en el  imput nombre.
  const email = document.querySelector("[data-email]").value // estamos obteniendo el valor que se ingresa en el  imput email
console.log(nombre , email);

clientServices
.crearcliente(nombre , email)
.then( ()=> {
 window.location.href = "/screens/registro_completado.html";
})
.catch(err => console.log(err));
});


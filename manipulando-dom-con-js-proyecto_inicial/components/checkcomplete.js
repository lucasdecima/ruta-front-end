// esta funcion la creamos para insertar el icono de check . indicamos crear una i y despues a esa i le agregamos las clases como estan en html y css con el atributo   i.classList.add("");  
const checkcomplete = () => {
  const i = document.createElement("i")
  i.classList.add("far" , "fa-check-square" , "icon" );
  i.addEventListener("click" , completetask); // a i le  estamos agregando una funcionalidad y le decios que cuando se haga click se va a realizar la funcion completetask.
  return i;

};


const completetask = (event) => {
  //console.log(event.target); asi identificamos a cada elemento despues de hacer click en eñ boton check
  const element = event.target;
  //la funcion toggle sirve para  verificar si existe la clase y si existe la quito y si no existe la coloca.
  element.classList.toggle("fas");// para agregar clase al evento una vez clickeado
  element.classList.toggle("completeIcon")
  element.classList.toggle("far") // para eliminar clases del elemento una vez clickeado
};



// con EXPORT DEFAULT lo que estamos haciendo es autorizar la exportacion del archivo js hacia el principal en el cual deberemos relacionar la ruta posteriormente. 
export default checkcomplete;
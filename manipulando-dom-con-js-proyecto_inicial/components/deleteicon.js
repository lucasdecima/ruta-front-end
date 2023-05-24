const deleteicon = () =>{

  const  i = document.createElement("i");
  i.classList.add("fas" , "fa-trash-alt", "trashIcon", "icon");
  i.addEventListener("click", deletetask );
  return i ;
}

const deletetask = (event) =>{
  const parent = event.target.parentElement; // con .target.parentElement estamos accediendo al evento y dentro del evento a su padre que en este caso seria la lista completa la cual es la que desearemos eliminar.
console.log(parent);
parent.remove(); // con .remove(); le estamos indicando a la constante que se elimine completa es decir todo su contenido. 
}




// con EXPORT DEFAULT lo que estamos haciendo es autorizar la exportacion del archivo js hacia el principal en el cual deberemos relacionar la ruta posteriormente.
export default deleteicon ;
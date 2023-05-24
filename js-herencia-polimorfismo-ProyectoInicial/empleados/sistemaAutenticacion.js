export class sistemadeautenticacion {
  static login(usuario, clave){
    if ("autenticable" in usuario && usuario.autenticable instanceof Function  ) // usamos la palabra in y preguntamos si autenticables esta dentro de usuario , ejecutar la accion && consultamos si autenticable es una funcion
    return usuario.autenticable(clave);
    //return usuario .clave == clave ;
    else 
    return false; 
  }

}
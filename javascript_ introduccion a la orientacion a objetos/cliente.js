// DEFINICION DE CLASES
export class cliente { //una class es una molde que vamos a crear en este caso para clientes
    nombrecliente;
    dnicliente;
    
    constructor (nombrecliente , dnicliente) { //con la funcion constructor dentro de la clase indicamos los valores por defecto que van a tener las instancias en los nuevos modelos que creemos.
      this.nombrecliente = nombrecliente ;
      this.dnicliente = dnicliente ;
    }
}
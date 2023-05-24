//FUNCION PARA UNIFICAR FECHAS
export const uniquedates = (task) => {//creamos una funcion y el parametro tasks son los datos del localstorage
        //console.log(task); //para ver datos del localstorage
        const unique = [];//array donde se iran agregando los datos 
        
        
        task.forEach(   ( task )  => {// recorremos todos los datos obtenidos del localstorage y realizamos una funcion
            //console.log(task.dateformat); // obtenemos las fechas individuales del array
            if( !unique.includes( task.dateformat ) ){ // aca le indicamos que si la fecha obtenida del localstorage es desigual a otra en el array/unique que la vaya agregando al array  
                unique.push(task.dateformat) // le indicamos que lo agrege al array
            }
        });     
        //console.log(unique);// para ver el array ya pusheado con los datos
        return unique; // para retornar el array
        
}
// Nuestra app debe manejar 
// persistencia(datos que se almacenan en el disco)

//libreria de filesystem
const fs = require('fs');
//vector
let tareasPorHacer = [];

/*
Funcion flecha guardarDB
Guardamos informacion en formato tipo json mediante el metodo stringify
usamos el metodo .writeFile para guardar en un archivo data.json el contenido
de la variable data que almaceno la informacion del vector tareasPorHacer
*/
const guardarDB = () => {
    let data = JSON.stringify(tareasPorHacer);
    fs.writeFile('modelo/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar la infomacion', err);

    })
}

/* Funcion flecha cargarDB
Transforma un archivo de .json a un vector de objetos
*/
const cargarDB = () => {
    try {
        tareasPorHacer = require('../modelo/data.json')

    } catch (error) {
        tareasPorHacer = [];

    }
}


/*
funcion flecha
Creamos dentro del controlador tareas-por-hacer
una función que crea un objeto tarea el cual será 
insertado al vector tareasPorHacer
*/

const crear = (descripcion) => {
    cargarDB();
    let tarea = {
        descripcion,
        completado: false
    }
    tareasPorHacer.push(tarea);
    guardarDB();
    return tarea;
}

/*Funcion flecha listar*/
const getLista = (opc) => {
    cargarDB();
    if (opc) {
        let pendiente = tareasPorHacer.filter(tarea => tarea.completado === true);
        tareasPorHacer = pendiente;
        return tareasPorHacer
    } else {
        return tareasPorHacer
    }

}

/*Funcion flecha actualizar
findIndex encontramos el indice del objeto */
const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        tareasPorHacer[index].completado = completado;
        guardarDB();
        return "Tarea realizada";
    }
    return "No existe tarea o esta mal escrita";
}

/*Funcion flecha borrar
recibimos como argumento la descripcion
cargamos la base de datos
almacenamo en nuevolistado todos los elementos que sean diferentes
a la descripcion ingresada para eso nos ayuda .filter
la condicion del if es si el nuevo vector e igual al vector anterior en tamaño
eso quiere decir que se ingreso un elemento que no existe y no se puede borrar
caso contrario se guarda el nuevo listado en tareas por hacer
 */
const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (tareasPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        tareasPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}


//Exportamos las funciones 
module.exports = {
    crear,
    getLista,
    actualizar,
    borrar
}
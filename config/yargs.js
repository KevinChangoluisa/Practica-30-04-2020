const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de las tareas'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada o pendiente una tarea'
}

const pendiente = {
    alias: 'p',
    desc: 'Tareas pendientes'

}
const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualizar una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .command('listar', 'Listar una tarea', {
        pendiente
    })
    .argv;

//exportamos el modulo

module.exports = {
    argv
}
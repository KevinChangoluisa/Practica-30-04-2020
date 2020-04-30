const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descipcion de la tareas'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada o pendiente una tarea'
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
    .command('listar', 'Listar una tarea', {})
    .argv;

//exportamos el modulo
module.exports = {
    argv
}
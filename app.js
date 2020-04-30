//Importamos la libreria 
const argv = require('./config/yargs').argv;
const tareas = require('./controlador/tareas-por-hacer');
const colors = require('colors');
let comando = argv._[0];



switch (comando) {
    case 'crear':
        let tarea = tareas.crear(argv.descripcion);
        break;
    case 'actualizar':
        let resp = tareas.actualizar(argv.descripcion, argv.completado);
        console.log(resp);
        break;
    case 'borrar':
        let borrado = tareas.borrar(argv.descripcion);
        console.log(borrado);
        break;
    case 'listar':
        let lista = tareas.getLista();
        console.log('============== TAREAS ==============='.green);
        for (let tarea of lista) {
            console.log(`Descripcion:  ${tarea.descripcion}`);
            console.log(`Completado:   ${tarea.completado}\n`);
        }
        console.log('======================================'.green);
        break;
    default:
        console.log('Comando no reconocido');
}
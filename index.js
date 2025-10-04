import {getProductos, getProductosById, postProductos, deleteProductos} from './asyncFunctions.js';

const args= process.argv.slice(2);
const [argv0, argv1,...rest]= args;

switch (argv0) {
    case 'GET':
        if (argv1==='productos') {
            getProductos();
        } else if(argv1.includes('productos/')) {
            const id= argv1.split('/')[1];
            getProductosById(id);
        }else{
            console.log('Comando no válido para GET');
        }
        break;
    case 'POST':
        if (argv1==='productos') {
            const[titulo, precio, categoria]= rest;
            const producto= {titulo, precio, categoria}
            postProductos(producto);            
            } else {
            console.log('Comando no válido para POST');
        }
        break;
    case 'DELETE':
        if (argv1.includes('productos/')) {
            const id= argv1.split('/')[1];
            deleteProductos(id);
        } else {
            console.log('Comando no válido para DELETE');
        } 
        break;
    default:
        console.log('Comando no reconocido. Usa GET, POST o DELETE.');
        break;     

    }

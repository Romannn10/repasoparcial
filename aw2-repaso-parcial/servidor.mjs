import http, { createServer } from 'node:http'
import fsp from 'node:fs/promises'
import path from 'node:path'
import { readFile } from 'node:fs';
import { gestionarIndex, gestionarRecursos } from './funcionalidades.mjs';

const puerto = 3000;
const rutaindex = 'publica'


const servidor = createServer((peticion, respuesta)=>{
    const metodo = peticion.method;
    const ruta = peticion.url
    if(metodo === 'GET'){
        if(ruta === '/'){
            gestionarIndex(respuesta)
            
        }else{
            gestionarRecursos(peticion,respuesta)
        }
    }else if(metodo === 'POST'){

    }else{

    }
})

servidor.listen(puerto);

/*
No utilizar computadora propia ni celular
No iniciar whatsapp web

CONSIGNAS

- El la carpeta del proyecto crear un archivo "servidor.mjs"
- Uso obligatorio de los modulos http, fs o fs/promises, path
- Creacion de servidor y escuchar en el puerto 3000

- Agrupar las peticiones que atiendan los métodos (verbos) GET y POST, capturar 
las peticiones que no vengan con ninguno de esos verbos.

- Crear funciones para desacoplar el código y gestionar las peticiones
Cada función manejará las resspuestas al servidor (comentar el objetivo de la función)
- Crear un módulo que contenga todas las funcionalidades y poder importarlas
al archivo de inicio "servidor.mjs"
- En GET: 
---- Crear una ruta de petición estática en la raíz / que devuelva un index.html 
---- Crear una ruta de petición dinámica (construir la ruta del sistema operativo con la ruta de petición) para atender la carga del archivo css
- En POST:
---- Crear una ruta de petición que cree y escriba un archivo .json en la carpeta "saludos" con el contenido:

CODIGOS DE ESTADO:
500 error de servidor ej: error de lectura del archivo
404 Recurso no encontrado
200 Recurso entregado al cliente
201 recurso creado


{
    "saludos" : [
        "Buenos días",
        "Buenas tardes",
        "Buenas noches"
    ]
}

*/

import http, { createServer } from 'node:http'
import fsp from 'node:fs/promises'
import {join} from 'node:path'
import { readFile } from 'node:fs/promises';
import { assert } from 'node:console';


const rutaIndex = 'publica'

const gestionarRecursos = async (req,res)=>{
    const ruta = join(rutaIndex,req.url);
    
    readFile(ruta, (err,data)=>{
        if(err){
            console.log(err);
            res.statusCode= 500;
            res.end('Recurso no encontrado');
        }else{
            res.statusCode = 200;
            res.end(data)
        }
    })
}

const gestionarIndex = async (res)=>{
    const ruta = join(rutaIndex,'index.html');
    let data;
    try{
        data = await readFile(ruta)
        
        res.end(data);
    }catch(err){
        res.statusCode = 500;
        
        throw err;
    }
   
    return
} 
export {gestionarIndex, gestionarRecursos}
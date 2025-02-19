import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import tareasDataSource from './tareasDataSource.mjs';
import tarea from '../models/tarea.mjs';

const __filename= fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const filePath=path.join(__dirname,'../tareas.txt');

export default class tareaRepository extends tareasDataSource{
    constructor(){
        super();
    }
    obtenerTodas(){
        try{
            const data=fs.readFileSync(filePath, 'utf-8');
            const tareas=JSON.parse(data);
            return tareas.map(tareaData=>new tarea(tareaData.id, tareaData.titulo, tareaData.descripcion, tareaData.completado));        
        }
    }
}
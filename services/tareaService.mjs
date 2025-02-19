import tareaRepository from "../repository/tareaRepository.mjs";
import tarea from "../models/tarea.mjs";

const tareaRepo=tareaRepository();

export function listarTareas(){
    return tareaRepo.obteberTodas();
}

export function listaTareasCompletadas(){
    const tareas=tareaRepo.obteberTodas();
    return tareas.filter(tarea=tarea.completado);
}

export function
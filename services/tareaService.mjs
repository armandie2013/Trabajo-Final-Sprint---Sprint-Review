import tareaRepository from "../repository/tareaRepository.mjs";
import tarea from "../models/tarea.mjs";

const tareaRepo = tareaRepository();

export function listarTareas() {
  return tareaRepo.obteberTodas();
}

export function listaTareasCompletadas() {
  const tareas = tareaRepo.obteberTodas();
  return tareas.filter((tarea = tarea.completado));
}

export function crearTarea(id, titulo, descripcion, completado = false) {
  const tareas = tareaRepo.obtenerTodas();
  const nuevaTarea = new tarea(id, titulo, descripcion, completado);
  nuevaTarea.validar();
  tareas.push(nuevaTarea);
  tareaRepo.guardar(tareas);
}

export function completarTarea(id) {
  const tareas = tareaRepo.obteberTodas();
  const tarea = tareas.find((tarea) => tarea.id === id);
  if (tarea) {
    tarea.completar();
    tareaRepo.guardar(tareas);
  }
}

export function eliminarTarea(id) {
  let tareas = tareaRepo.obteberTodas();
  tareas = tareas.filter((tarea) => tarea.id !== id);
  tareaRepo.guardar(tareas);
}

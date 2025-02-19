import tareaRepository from "../repository/tareaRepository.mjs";
import tarea from "../models/tarea.mjs";

const tareaRepo = new tareaRepository();

export function listarTareas() {
  return tareaRepo.obtenerTodas();
}

export function listaTareasCompletadas() {
  const tareas = tareaRepo.obtenerTodas();
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
  const tareas = tareaRepo.obtenerTodas();
  const tarea = tareas.find((tarea) => tarea.id === id);
  if (tarea) {
    tarea.completar();
    tareaRepo.guardar(tareas);
  }
}

export function eliminarTarea(id) {
  let tareas = tareaRepo.obtenerTodas();
  tareas = tareas.filter((tarea) => tarea.id !== id);
  tareaRepo.guardar(tareas);
}

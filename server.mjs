import express from 'express';
import {listarTareasController, listarTareasCompletadasController, crearTareaController, completarTareaController, elimarTareaController} from './controllers/tareaController.mjs';

const app = express();
const PORT= 3000;

app.use(express.json());

app.get('/tareas', listarTareasController);

app.get('/tareas/completadas', listarTareasCompletadasController);

app.post('/tareas',)
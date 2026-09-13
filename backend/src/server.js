import express from 'express';
import cors from 'cors';
import { reportesRouter } from './routes/reportes.route.js';

export const app = express();

// Sin esto, el navegador bloquea el fetch que hace tu frontend (servido por
// Live Server en un puerto/origen distinto al de este backend) por la
// política de CORS. cors() sin argumentos permite cualquier origen — para
// este proyecto está bien; si algún día necesitás restringirlo, se le pasa
// { origin: 'https://tu-dominio.com' }.
app.use(cors());
app.use(express.json());

app.use('/api/reportes', reportesRouter);

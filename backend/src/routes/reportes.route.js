import { Router } from 'express';
import { postReporte, getReportes } from '../controllers/reportes.controller.js';

export const reportesRouter = Router();

reportesRouter.post('/', postReporte);
reportesRouter.get('/', getReportes);

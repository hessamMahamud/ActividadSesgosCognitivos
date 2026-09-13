import { crearReporte, obtenerReportes } from '../services/reportes.service.js';

export async function postReporte(req, res) {
    const { respuestas, lindaChoice, pedroChoice, perfil } = req.body;

    if (!respuestas || !perfil) {
        return res.status(400).json({ error: 'Faltan respuestas o perfil en el body.' });
    }

    try {
        const creado = await crearReporte({ respuestas, lindaChoice, pedroChoice, perfil });
        res.status(201).json(creado);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'No se pudo guardar el reporte.' });
    }
}

export async function getReportes(req, res) {
    try {
        const reportes = await obtenerReportes();
        res.json(reportes);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'No se pudieron obtener los reportes.' });
    }
}

import { state } from './state.js';
import { computeProfile } from './scoring.js';

// TODO: cuando despliegues el backend, cambiar esto por la URL real (ej. Railway).
const API_URL = '/api/reportes';

export async function guardarReporte() {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                respuestas: state.answers,
                lindaChoice: state.lindaChoice,
                pedroChoice: state.pedroChoice,
                perfil: computeProfile(),
            }),
        });

        if (!response.ok) {
            throw new Error(`El backend respondió ${response.status}`);
        }
    } catch (err) {
        // No bloqueamos la UI si falla el guardado: el usuario ya llegó a ver
        // su resultado, que es lo importante para la actividad del semillero.
        // Solo lo dejamos registrado en consola para que vos lo notes al probar.
        console.error('No se pudo guardar el reporte:', err.message);
    }
}

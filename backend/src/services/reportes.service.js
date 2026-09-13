import { pool } from '../config/pool.config.js';

export async function crearReporte({ respuestas, lindaChoice, pedroChoice, perfil }) {
    const result = await pool.query(
        `INSERT INTO reportes (respuestas, linda_choice, pedro_choice, perfil)
         VALUES ($1, $2, $3, $4)
         RETURNING id, creado_en`,
        [JSON.stringify(respuestas), lindaChoice, pedroChoice, JSON.stringify(perfil)]
    );
    return result.rows[0]; // { id, creado_en }
}

export async function obtenerReportes() {
    const result = await pool.query(
        `SELECT id, respuestas, linda_choice, pedro_choice, perfil, creado_en
         FROM reportes
         ORDER BY creado_en DESC`
    );
    return result.rows;
}

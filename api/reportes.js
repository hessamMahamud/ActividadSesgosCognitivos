import { Pool } from "pg";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

export default async function handler(req, res) {
    try {
        if (req.method === 'GET') {
            const result = await pool.query(`
                SELECT
                    id,
                    respuestas,
                    linda_choice,
                    pedro_choice,
                    perfil,
                    creado_en
                FROM reportes
                ORDER BY creado_en DESC
            `);

            return res.status(200).json(result.rows);
        }

        if (req.method === 'POST') {
            const {
                respuestas,
                lindaChoice,
                pedroChoice,
                perfil
            } = req.body;

            if (!respuestas || !perfil) {
                return res.status(400).json({
                    error: 'Faltan respuestas o perfil.'
                });
            }

            const result = await pool.query(
                `INSERT INTO reportes
                (respuestas, linda_choice, pedro_choice, perfil)
                VALUES ($1, $2, $3, $4)
                RETURNING id, creado_en`,
                [
                    JSON.stringify(respuestas),
                    lindaChoice,
                    pedroChoice,
                    JSON.stringify(perfil)
                ]
            );

            return res.status(201).json(result.rows[0]);
        }

        return res.status(405).json({
            error: 'Método no permitido'
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: 'Error interno'
        });
    }
}

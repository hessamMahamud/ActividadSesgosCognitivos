import pg from 'pg';

// process.loadEnvFile() lee el archivo .env y carga sus variables en
// process.env — es nativo de Node (desde la v20.6), no hace falta dotenv.
process.loadEnvFile();

const { Pool } = pg;

// Neon exige SSL para conectarse desde fuera de su red. rejectUnauthorized: false
// evita que Node rechace el certificado por no reconocer la autoridad certificadora
// de Neon — es el mismo trade-off que aceptás en cualquier servicio serverless
// gestionado (no es un riesgo real para este proyecto, la conexión sigue cifrada).
export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
});

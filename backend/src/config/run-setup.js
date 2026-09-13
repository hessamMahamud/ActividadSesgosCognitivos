import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { pool } from './pool.config.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sql = readFileSync(join(__dirname, 'setup.sql'), 'utf-8');

try {
    await pool.query(sql);
    console.log('Tabla reportes lista.');
} catch (err) {
    console.error('Error corriendo setup.sql:', err.message);
} finally {
    await pool.end();
}

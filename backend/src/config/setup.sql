CREATE TABLE IF NOT EXISTS reportes (
    id            SERIAL PRIMARY KEY,
    respuestas    JSONB NOT NULL,
    linda_choice  TEXT,
    pedro_choice  TEXT,
    perfil        JSONB NOT NULL,
    creado_en     TIMESTAMPTZ NOT NULL DEFAULT now()
);

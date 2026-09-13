# ¿Qué tan imparcial eres?

Aplicación web interactiva diseñada para explorar y visualizar sesgos cognitivos comunes a través de una serie de preguntas y escenarios inspirados en la psicología cognitiva y la toma de decisiones.

## Demo

🌐 Aplicación desplegada:

https://actividad-sesgos-cognitivos.vercel.app/

## Repositorio

📁 Código fuente:

https://github.com/hessamMahamud/ActividadSesgosCognitivos

---

## Descripción

El cuestionario evalúa distintas tendencias cognitivas mediante preguntas y escenarios breves.

Al finalizar, genera un perfil basado en cuatro dimensiones:

- Efecto Halo
- Sesgo de Confirmación
- Confianza Excesiva
- Sesgo de Nosotros vs. Ellos

Los resultados se almacenan de forma anónima para fines académicos y de exploración estadística.

---

## Tecnologías

### Frontend

- HTML5
- CSS3
- JavaScript (ES Modules)

### Backend

- Vercel Functions
- Node.js

### Base de Datos

- PostgreSQL
- Neon

---

## Arquitectura

```text
Usuario
   │
   ▼
Frontend (Vercel)
   │
   ▼
/api/reportes
(Vercel Function)
   │
   ▼
Neon PostgreSQL
```

---

## Estructura del proyecto

```text
/
│
├── index.html
├── package.json
├── vercel.json
│
├── api
│   └── reportes.js
│
└── src
    ├── api.js
    ├── handlers.js
    ├── index.js
    ├── render.js
    ├── scoring.js
    ├── state.js
    │
    ├── config
    │   ├── run-setup.js
    │   └── setup.sql
    │
    ├── css
    ├── data
    └── views
```

---

## Desarrollo local

Instalar dependencias:

```bash
npm install
```

Configurar variable de entorno:

```env
DATABASE_URL=postgresql://...
```

Ejecutar con Live Preview o cualquier servidor estático local.

---

## API

### Obtener reportes

```http
GET /api/reportes
```

### Guardar reporte

```http
POST /api/reportes
```

Ejemplo:

```json
{
  "respuestas": {},
  "lindaChoice": "b",
  "pedroChoice": "igual",
  "perfil": {
    "halo": 1,
    "nosotros": 1,
    "confianza": 1,
    "confirmacion": 1
  }
}
```

---

## Objetivo académico

Este proyecto fue desarrollado como instrumento de exploración de sesgos cognitivos dentro de un contexto académico y de investigación, permitiendo recopilar respuestas y perfiles de forma anónima para posteriores análisis.

---

## Licencia

MIT

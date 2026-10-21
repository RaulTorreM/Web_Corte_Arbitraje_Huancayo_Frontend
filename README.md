# Corte Superior de Arbitraje de Huancayo — Frontend

Sitio web institucional independiente de la **Corte Superior de Arbitraje de Huancayo**, publicado en `arbitraje.camarahuancayo.com.pe`.

El proyecto es una SPA construida con Vite, React y TypeScript. En esta fase **no tiene backend ni autenticación**: el contenido normativo está centralizado en datos tipados, las nóminas y registros son de demostración y los formularios validan y simulan el envío. La JPRD se presenta como servicio **en implementación** y sus documentos como **preliminares**.

---

## Stack

- **Vite 8** + **React 19** + **TypeScript**
- **MUI 9** como sistema de componentes
- **Framer Motion 13** para animaciones y microinteracciones
- **React Router 7** para navegación SPA
- **React Hook Form + Zod** para formularios
- **Axios** preparado para una futura API externa
- **Nginx** + **Docker** para despliegue en **Railway**

---

## Desarrollo local

```bash
npm install
npm run dev
```

El servidor de desarrollo se abre en `http://localhost:5174`.

### Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Verifica tipos y genera `dist/` |
| `npm run preview` | Sirve localmente la build de producción |
| `npm run lint` | Ejecuta ESLint |

---

## Estructura

```text
src/
├── api/            Cliente Axios para una API futura
├── assets/         Sello institucional
├── components/     Componentes comunes, layout y formularios
├── data/           Datos mock tipados (sitio, nóminas, documentos, tarifas…)
├── features/       Páginas por sección
├── routes/         Definición de rutas
├── theme/          Tokens de marca y tema MUI
└── utils/          Variantes de animación
```

### Secciones publicadas

- Inicio
- Quiénes somos: presentación, Consejo Superior, equipo y certificaciones
- Arbitraje: presentación, costos, reglamentos, árbitros, cláusula, inicio y laudos
- JPRD: presentación, reglamento, adjudicadores, aranceles, cláusula y decisiones
- Documentos
- Capacitaciones
- Contacto
- Canal de denuncias
- Libro de reclamaciones
- Página 404

---

## Pendientes de validación institucional

### 1. Documentos y PDFs

Las URLs de documentos y registros usan `"#"` como marcador. La interfaz muestra **“Próximamente”** mientras no exista el archivo oficial. Cuando la institución entregue los PDF firmados, actualiza `url` en `src/data/documentos.ts` y en `src/data/registros.ts`.

No deben publicarse como definitivos:

- el Código de Ética mientras conserve referencias a la Cámara de Lima;
- el Reglamento mientras mantenga artículos duplicados o notas editoriales internas;
- los rubros G, I, J y K del Anexo 1, hoy marcados **“En revisión”**;
- los documentos, aranceles y cláusulas de la JPRD, hoy marcados **“Preliminar”**.

### 2. JPRD

La JPRD se anuncia en el Estatuto, pero no tiene reglamento ni aranceles aprobados. Las páginas `/jprd` muestran un aviso reutilizable (`PreliminaryNotice`) y no deben presentarse como servicio disponible.

### 3. Libro de Reclamaciones

La web mantiene un plazo de **15 días hábiles**. El paquete normativo propone 30 días calendario; el cambio requiere validación legal antes de publicarse.

### 4. Datos de contacto y redes

También en `src/data/site.ts`:

- `contact.address`, `phone`, `phoneHref`, `whatsapp`, `email`
- `contact.schedule`
- `contact.mapQuery` (consulta usada por el mapa embebido)
- `socials`

Los datos actuales son referenciales y provienen temporalmente de la Cámara de Comercio de Huancayo.

### 5. Nóminas y registros

Los archivos de `src/data/` concentran directivos, árbitros, adjudicadores, laudos, decisiones y eventos. Son datos de demostración: no corresponden a expedientes ni personas oficialmente publicadas. El repositorio de laudos y el banco de decisiones JPRD están etiquetados como muestra o estado vacío.

### 6. Fotos

Las imágenes están en `public/images/`. Reemplaza los archivos manteniendo los nombres o actualiza las referencias en `src/data/` y en las páginas que las usan.

---

## Formularios

Los formularios de **Contacto**, **Denuncias** y **Libro de Reclamaciones**:

- validan en el cliente con React Hook Form + Zod;
- simulan el envío con un retardo;
- muestran un panel de éxito con un código referencial;
- **no realizan peticiones HTTP ni almacenan datos**.

Para conectar un backend, usa el cliente de `src/api/axiosClient.ts` y reemplaza la simulación en el `onSubmit` de cada página.

---

## Variables de entorno

Copia `.env.example` a `.env` si necesitas apuntar a una API futura:

```env
VITE_API_URL=https://api.ejemplo.com/api
```

Vite inyecta la variable en tiempo de build. Si no se define, el cliente usa `/api`.

---

## Build de producción

```bash
npm run build
```

El resultado se genera en `dist/`. La build incluye:

- división de código por ruta;
- fuentes autoalojadas (Fontsource);
- fallback SPA configurado en Nginx.

---

## Docker

```bash
docker build -t corte-arbitraje .
docker run --rm -p 8080:8080 -e PORT=8080 corte-arbitraje
```

Abre `http://localhost:8080`.

El contenedor:

1. compila la app en una etapa Node;
2. copia `dist/` a Nginx;
3. genera la configuración desde `nginx/default.conf.template` usando `${PORT}`;
4. expone `/healthz` para el healthcheck.

---

## Despliegue en Railway

1. Sube el repositorio a GitHub (o conecta el repo existente).
2. En Railway, crea un proyecto con **Deploy from GitHub repo**.
3. Railway detecta el `Dockerfile` y el archivo `railway.json`.
4. No es necesario definir un comando de inicio: Railway inyecta `PORT` y Nginx escucha en esa variable.
5. Verifica el healthcheck en `/healthz`.
6. En **Settings → Networking**, agrega el dominio personalizado `arbitraje.camarahuancayo.com.pe` y configura el registro DNS indicado por Railway.
7. Si en el futuro existe una API, define `VITE_API_URL` como variable de build/servicio.

### Notas de despliegue

- El sitio no usa variables secretas.
- El fallback SPA permite recargar cualquier ruta sin error 404.
- Los assets con hash se cachean por un año; `index.html` se sirve sin caché.

---

## Accesibilidad y estilo

- Español únicamente, sin modo oscuro.
- Navegación por teclado, enlace «Saltar al contenido» y foco visible.
- Animaciones respetan `prefers-reduced-motion`.
- Paleta institucional: azul `#2D4979`, azul profundo `#1B3157`, azul cielo `#9DC4EF` y dorado `#BA9907`.
- Tipografías: Fraunces (títulos) y Public Sans (texto).

---

## Estado actual

- Contenido normativo aplicado y centralizado; nóminas y registros de demostración.
- Sin login, panel administrador ni persistencia.
- JPRD en implementación, con documentos y aranceles preliminares.
- PDFs normativos pendientes: se muestran como “Próximamente”.
- Libro de Reclamaciones conserva 15 días hábiles hasta validación legal.
- Datos de contacto y redes reutilizados temporalmente de la Cámara.

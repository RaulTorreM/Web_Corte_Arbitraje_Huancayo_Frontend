# Handoff de frontend — Corte Superior de Arbitraje de Huancayo

Este archivo sirve para abrir una sesión nueva de OpenCode con el contexto del proyecto y trabajar **página por página** en diseño, responsive, accesibilidad y mejoras visuales, sin romper el contenido normativo ni reintroducir datos de prueba.

## Prompt para iniciar la nueva sesión

Abre OpenCode en este directorio y pega:

> Lee `FRONTEND-HANDOFF.md` y `PRODUCT.md`. Quiero revisar el frontend página por página: diseño, jerarquía, responsive, accesibilidad y consistencia visual. No cambies el contenido normativo sin fuente y no reintroduzcas datos mock. Empieza por la página que te indique y trabaja con cambios pequeños, verificando `npm run lint`, `npx tsc -b` y `npm run build`.

---

## 1. Objetivo de la nueva sesión

- Mejorar el **frontend**: diseño, composición, tipografía, espaciado, responsive, accesibilidad, estados vacíos, tablas, navegación y microinteracciones.
- Trabajar **de página en página**, no hacer un rediseño global desde cero.
- Mantener la identidad editorial ya definida: papel cálido, azul profundo, dorado como acento, serif para títulos, esquinas rectas.
- Mantener las rutas existentes.
- No agregar backend, login, panel administrador ni modo oscuro.
- No inventar datos, acreditaciones, estadísticas, plazos, precios ni funcionalidades.

## 2. Estado actual del proyecto

- El rediseño visual principal ya se hizo en el commit `c5adfc0`.
- La guía de requisitos imprimible quedó verificada como PDF de **1 página**.
- `npm run lint`, `npx tsc -b` y `npm run build` pasaron correctamente en ese momento.
- El servidor Vite quedó expuesto en red en el commit `4e79bb0`.
- El repositorio no tiene remoto configurado; los commits son locales.
- El sitio es una SPA sin backend. Los formularios ya no simulan envíos: se usan canales directos.
- Hay 23 rutas publicadas.

## 3. Restricciones editoriales que no se deben romper

1. **Español únicamente.**
2. **Sin modo oscuro.**
3. **Sin backend, login, panel administrador ni autenticación.**
4. **No inventar datos.** Si falta un dato, mostrar un estado vacío honesto o “Próximamente”.
5. La **JPRD** se presenta como servicio **en implementación**. Su reglamento, aranceles y cláusula son **preliminares**.
6. Los **rubros G, I, J y K** de la tabla de gastos están **en revisión**.
7. Los **PDFs oficiales** no existen todavía: se muestran como **“Próximamente”**.
8. El **Libro de Reclamaciones** mantiene **15 días hábiles** hasta validación legal.
9. La Corte **administra** el arbitraje; **no resuelve** la controversia. Esa distinción debe seguir visible.
10. No cambiar la web principal de la Cámara de Comercio.

## 4. Stack y comandos

- Vite 8 + React 19 + TypeScript 6
- MUI 9
- Framer Motion 13
- React Router 7
- Fuentes autoalojadas: Source Serif 4 y Public Sans
- Axios preparado para una API futura, sin uso actual

```bash
npm run dev      # http://localhost:5174
npm run lint
npx tsc -b
npm run build
```

Antes de cerrar cualquier cambio:

```bash
npm run lint
npx tsc -b
npm run build
```

## 5. Sistema de diseño actual

### Paleta

Definida en `src/theme/brand.ts`:

- Azul profundo: `#17324F`, `#0F2438`, `#0A1B2B`
- Azul cielo: `#A9C1D6`, `#E8EEF2`, `#D3DFE8`
- Dorado: `#B08A2E`, `#E7D8AE`, `#725311`, `#C9A84C`
- Papel cálido: `#F4F0E7`, `#EAE4D8`, `#DED6C6`
- Blanco cálido: `#FBF8F2`
- Tinta: `#17212C`
- Texto secundario: `#5A6470`
- Líneas: `#D7D0C3`, `#B8AF9E`
- Acento ladrillo: `#8D3B2D`

Regla de uso: el dorado marca reglas, estados y detalles; no se usa como fondo decorativo.

### Tipografía

- Títulos: `Source Serif 4`, Georgia, serif.
- Cuerpo: `Public Sans`, Segoe UI, Roboto, sans-serif.
- Los títulos usan `clamp()` y `text-wrap: balance`.
- No introducir una tercera familia tipográfica.

### Forma

- `borderRadius: 0` en el tema.
- Botones, inputs, cards y contenedores son rectos.
- Evitar el look genérico de SaaS con cards redondeadas y sombras difusas.
- Las jerarquías se construyen con líneas, espacio y tipografía, no con sombras.

### Layout

- `Container` con máximo 1240 px y padding lateral fluido.
- Grillas MUI de 12 columnas.
- Secciones con `py` fluido entre 7 y 10.
- Los héroes usan `PageHero` y las imágenes tienen proporciones controladas.

### Componentes existentes

En `src/components/common/`:

- `PageHero`
- `PageMeta`
- `SectionHeading`
- `SectionLabel`
- `SectionTitle`
- `SectionSubnav`
- `CtaBand`
- `FramedImage`
- `PersonCard`
- `DocumentCard`
- `ProfessionalDirectory`
- `RegistryBrowser`
- `PreliminaryNotice`
- `ClauseBlock`
- `EmptyState`
- `FilterSelect`
- `SearchInput`
- `Breadcrumbs`
- `BrandMark`
- `CountUp`
- `Reveal`
- `PageFallback`
- `ScrollToTop`

Antes de crear un componente nuevo, revisar si ya existe uno que resuelva el caso.

### Movimiento

- Framer Motion se usa con animaciones sutiles de entrada.
- Respetar `prefers-reduced-motion` cuando se agreguen animaciones nuevas.
- No animar todo: el movimiento debe guiar la lectura, no decorar.

## 6. Rutas y páginas

| Ruta | Archivo principal | Estado / foco |
|---|---|---|
| `/` | `src/features/home/HomePage.tsx` | Revisar hero, jerarquía, CTA y prueba de confianza |
| `/quienes-somos` | `src/features/nosotros/QuienesSomosPage.tsx` | Presentación institucional |
| `/quienes-somos/consejo` | `src/features/nosotros/ConsejoPage.tsx` | **Datos de consejeros mock** |
| `/quienes-somos/equipo` | `src/features/nosotros/EquipoPage.tsx` | **Datos de equipo mock** |
| `/quienes-somos/certificaciones` | `src/features/nosotros/CertificacionesPage.tsx` | **Afirmaciones ISO mock** |
| `/arbitraje` | `src/features/arbitraje/ArbitrajePage.tsx` | Presentación del servicio |
| `/arbitraje/costos` | `src/features/arbitraje/CostosPage.tsx` | Tablas y ejemplos; G-K en revisión |
| `/arbitraje/reglamentos` | `src/features/arbitraje/ReglamentosPage.tsx` | Estados “Vigente/Aprobado” por corregir |
| `/arbitraje/arbitros` | `src/features/arbitraje/ArbitrosPage.tsx` | **Nómina mock** |
| `/arbitraje/clausula` | `src/features/arbitraje/ClausulaPage.tsx` | Cláusula modelo |
| `/arbitraje/inicio` | `src/features/arbitraje/InicioArbitrajePage.tsx` | Requisitos y pasos |
| `/arbitraje/laudos` | `src/features/arbitraje/LaudosPage.tsx` | **Laudos mock** |
| `/jprd` | `src/features/jprd/JprdPage.tsx` | Servicio en implementación |
| `/jprd/reglamento` | `src/features/jprd/JprdReglamentoPage.tsx` | Preliminar |
| `/jprd/adjudicadores` | `src/features/jprd/AdjudicadoresPage.tsx` | **Nómina mock + tasas sin aprobar** |
| `/jprd/aranceles` | `src/features/jprd/JprdArancelesPage.tsx` | Propuesta preliminar |
| `/jprd/clausula` | `src/features/jprd/JprdClausulaPage.tsx` | Preliminar |
| `/jprd/decisiones` | `src/features/jprd/JprdDecisionesPage.tsx` | Estado vacío correcto |
| `/documentos` | `src/features/documentos/DocumentosPage.tsx` | PDFs pendientes |
| `/capacitaciones` | `src/features/capacitaciones/CapacitacionesPage.tsx` | **Eventos mock** |
| `/contacto` | `src/features/contacto/ContactoPage.tsx` | Datos referenciales de la Cámara |
| `/denuncias` | `src/features/denuncias/DenunciasPage.tsx` | Procedimiento y sanciones |
| `/libro-de-reclamaciones` | `src/features/reclamaciones/ReclamacionesPage.tsx` | 15 días hábiles |
| `*` | `src/features/not-found/NotFoundPage.tsx` | 404 |

## 7. Datos reales vs. datos de prueba

### Datos reales que se deben conservar

- Nombre oficial y naturaleza de la Corte.
- Composición, quórum, período, funciones y comisiones del Consejo.
- Registro de árbitros y adjudicadores: vigencia de 3 años, criterios y tasas.
- Plazos del Reglamento: 5 días, 20 días, 40 + 10 días, 15 días.
- Tarifas del Anexo 1, Anexo 3 y Anexo 4, salvo G-K y F→G.
- Sanciones: amonestación, suspensión, separación y multa de hasta 50 UIT.
- JPRD: servicio en implementación, sin reglamento ni aranceles aprobados.
- Libro de Reclamaciones: 15 días hábiles.
- Cláusulas modelo, con revisión final del texto.

### Datos de prueba que no se deben publicar

| Dato | Archivo actual | Acción |
|---|---|---|
| 7 consejeros y biografías | `src/data/directivos.ts` | Reemplazar por nómina oficial u ocultar |
| 5 integrantes del equipo | `src/data/directivos.ts` | Reemplazar por equipo oficial u ocultar |
| 8 árbitros | `src/data/arbitros.ts` | Reemplazar por Registro oficial u ocultar |
| 6 adjudicadores | `src/data/arbitros.ts` | Retirar; JPRD sin reglamento |
| 5 laudos | `src/data/registros.ts` | Eliminar; dejar estado vacío |
| 5 eventos | `src/data/eventos.ts` | Reemplazar por agenda real o estado vacío |
| 2 afirmaciones ISO | `src/features/nosotros/CertificacionesPage.tsx` | Retirar avances no respaldados |
| Cifras 480 / 126 / S/ 850 M / 7.5 meses | No están en la web actual | No agregar |
| Contacto `Jr. Ejemplo 123` | No está en la web actual | No agregar |
| MINJUS/OSCE “registrado” | No están en la web actual | No agregar |
| Memoria Anual 2025 | No está en la web actual | No agregar |
| Decisiones JPRD mock | No están en la web actual | No agregar |

### Contacto

- La web usa dirección, teléfono, correos, horario, mapa y redes de la **Cámara de Comercio de Huancayo**.
- El README los marca como **referenciales**, no como canales oficiales confirmados de la Corte.
- No cambiar a los datos mock del paquete (`Jr. Ejemplo 123`, `(064) 000 000`, `consultas@corte-arbitraje-huancayo.pe`).
- Mientras no haya confirmación oficial, evitar la frase “canal real” en `/contacto`.

## 8. Plan de trabajo página por página

### Fase 0 — Sanear la base visual y los estados vacíos

1. Revisar `src/components/common/` y el tema.
2. Corregir estados vacíos de consejo, equipo, árbitros, adjudicadores, laudos y capacitaciones.
3. Evitar que una página se vea “rota” cuando no hay datos.
4. No rellenar vacíos con datos de ejemplo.

### Fase 1 — Páginas institucionales

1. `/` — hero, prueba de confianza, “La Corte en dos minutos”, mecanismos, ruta, documentos, CTA.
2. `/quienes-somos` — presentación, estructura, valores, hechos.
3. `/quienes-somos/consejo` — composición, funciones y comisiones; integrantes oficiales o estado vacío.
4. `/quienes-somos/equipo` — secretarías y equipo oficial o estado vacío.
5. `/quienes-somos/certificaciones` — estados reales de implementación, sin afirmaciones mock.

### Fase 2 — Arbitraje

1. `/arbitraje` — claridad del servicio y diferencias entre modalidades.
2. `/arbitraje/costos` — tablas, ejemplos, notas, responsive y rubros en revisión.
3. `/arbitraje/reglamentos` — estados documentales y descargas pendientes.
4. `/arbitraje/arbitros` — requisitos, postulación y registro oficial o estado vacío.
5. `/arbitraje/clausula` — legibilidad de la cláusula, copiado y validación.
6. `/arbitraje/inicio` — requisitos, pasos, tasas y canales.
7. `/arbitraje/laudos` — reglas reales y estado vacío del banco.

### Fase 3 — JPRD

1. `/jprd` — que se entienda “en implementación” sin parecer disponible.
2. `/jprd/reglamento`, `/jprd/aranceles`, `/jprd/clausula` — avisos preliminares consistentes.
3. `/jprd/adjudicadores` — retirar nómina y tasas no aprobadas.
4. `/jprd/decisiones` — estado vacío.

### Fase 4 — Servicios y páginas legales

1. `/documentos` — estados “Próximamente”, filtros y jerarquía.
2. `/capacitaciones` — agenda real o estado vacío.
3. `/contacto` — canales, mapa, horarios y claridad.
4. `/denuncias` — procedimiento, confidencialidad y tabla de sanciones.
5. `/libro-de-reclamaciones` — legibilidad, aviso legal y 15 días hábiles.
6. `404` — utilidad y enlaces de recuperación.

## 9. Checklist de revisión por página

Para cada página:

- [ ] Jerarquía clara: un título principal y un siguiente paso evidente.
- [ ] Sin repetición innecesaria de CTAs.
- [ ] Desktop, tablet y móvil sin overflow horizontal.
- [ ] Tablas con scroll horizontal controlado en móvil.
- [ ] Textos largos con medida de lectura cómoda.
- [ ] Imágenes con proporción estable y `alt` descriptivo.
- [ ] Contraste suficiente y foco visible.
- [ ] Navegación por teclado.
- [ ] Estados vacíos honestos, sin datos mock.
- [ ] Sin errores en consola.
- [ ] `npm run lint`, `npx tsc -b` y `npm run build` pasan.

## 10. Reglas de trabajo para el agente

1. Inspeccionar antes de editar.
2. No cambiar rutas existentes.
3. No reemplazar el sistema de diseño por otro.
4. Reutilizar componentes existentes.
5. Hacer cambios pequeños y verificables.
6. No inventar contenido para “llenar” una página.
7. No publicar documentos, personas, laudos, eventos ni certificaciones mock.
8. Si un dato no está confirmado, dejarlo como pendiente o estado vacío.
9. No modificar la web principal de la Cámara.
10. Al terminar cada página, resumir qué se cambió y qué falta.

## 11. Información pendiente de la institución

- Directorio oficial del Consejo y del equipo.
- Registro oficial de árbitros y adjudicadores.
- PDFs firmados: Estatuto, Reglamento, Código de Ética, apéndices, Tabla de Gastos y formatos.
- Correcciones del Código de Ética y del Reglamento.
- Validación de los rubros G, I, J, K y del salto F→G.
- Aprobación de la JPRD: reglamento, aranceles y cláusula.
- Agenda real de capacitaciones.
- Laudos anonimizados o confirmación de banco vacío.
- Datos de contacto oficiales de la Corte.
- Evidencia de certificaciones ISO, MINJUS y OSCE.
- Decisión legal sobre el plazo del Libro de Reclamaciones.

## 12. Primer encargo sugerido

> Lee `FRONTEND-HANDOFF.md`. Empieza por `/` y `/quienes-somos`: audita diseño desktop y móvil, jerarquía, espaciado, tipografía, CTAs y accesibilidad. Propón los cambios antes de implementarlos. No toques datos normativos ni reintroduzcas mock. Al terminar, corre lint, tsc y build.

También se puede empezar por la página que el usuario indique, pero conviene mantener este orden para no mezclar saneamiento de datos con rediseño visual.

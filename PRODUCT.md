# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dos audiencias con el mismo peso: empresas, abogados y profesionales que evalúan o inician un arbitraje, y ciudadanía que busca entender qué hace la Corte y cómo acceder a sus servicios. La mayoría llega sin conocer la diferencia entre administrar un arbitraje y resolver la controversia.

## Product Purpose

La Corte Superior de Arbitraje de la Cámara de Comercio y Producción de Huancayo y de la Región Junín organiza y administra arbitrajes bajo un reglamento único. El sitio debe explicar con claridad qué es la Corte, qué servicios ofrece, cuánto cuestan y cómo se inicia un caso, sin prometer resultados ni sustituir la labor del tribunal arbitral. El éxito significa que una persona nueva entienda en pocos segundos qué está viendo y encuentre el siguiente paso correcto.

## Positioning

Una corte arbitral regional, afiliada a la Cámara de Comercio de Huancayo, que ofrece administración institucional con reglas, plazos, tarifas y nómina de árbitros publicados. La Corte administra el procedimiento; la decisión de la controversia corresponde al tribunal arbitral.

## Operating Context

- Sitio público sin login, panel administrador ni backend.
- Contenido normativo: reglamentos, directivas, tarifas, plazos, cláusula arbitral, nómina de árbitros, banco de laudos y JPRD.
- La JPRD está en implementación: reglamento, aranceles y cláusula son preliminares y no están vigentes.
- Los documentos oficiales aún no están disponibles para descarga; se muestran como “Próximamente”.
- Los canales reales de atención son teléfono, correo, WhatsApp y atención presencial.
- Los formularios simulados no tienen backend y deben desaparecer.

## Capabilities and Constraints

- SPA en React, Vite, TypeScript, MUI, Framer Motion y React Router.
- Español únicamente; sin modo oscuro ni autenticación.
- No se deben inventar datos, acreditaciones, estadísticas, testimonios, plazos, precios ni funcionalidades.
- El Libro de Reclamaciones mantiene 15 días hábiles hasta validación legal.
- La URL del sistema de arbitraje y los datos de contacto definitivos están pendientes de confirmación.
- Las rutas existentes se conservan; la simplificación se hace dentro de cada página.

## Brand Commitments

- Nombre legal completo: Corte Superior de Arbitraje de la Cámara de Comercio y Producción de Huancayo y de la Región Junín.
- Identidad visual derivada del sello institucional: azul profundo, azul cielo y dorado.
- Tono institucional, sobrio, claro y verificable. Sin lenguaje publicitario ni promesas de resultados.
- No modificar la web principal de la Cámara de Comercio.

## Evidence on Hand

- Sello institucional en `src/assets/brand/logo-corte.png`.
- Fotografías de la sede en `public/images/`.
- Contenido normativo ya aplicado en las páginas y datos de `src/data/`.
- Ausencias que no deben rellenarse: PDFs oficiales, reglamento y aranceles JPRD aprobados, URL del sistema, métricas históricas y acreditaciones no confirmadas.

## Product Principles

1. La claridad institucional gana sobre la decoración.
2. Cada página responde una pregunta principal y ofrece un siguiente paso evidente.
3. La Corte administra; no decide la controversia. Esa distinción se mantiene visible.
4. Lo que no está confirmado se presenta como pendiente, nunca como vigente.
5. Menos bloques, mejor jerarquía y contacto humano antes que formularios sin backend.

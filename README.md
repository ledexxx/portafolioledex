# Portafolio de Leonel Delgado

Portafolio profesional orientado a oportunidades en SEO técnico y desarrollo web. Construido con Next.js App Router, React, TypeScript y Tailwind CSS.

## Desarrollo y comprobación

```sh
npm ci
npm run dev
```

Producción y comprobación de SEO (usar dos terminales; no ejecutar dev y build simultáneamente):

```sh
npm run build
npm run start
```

```sh
node scripts/check-seo.mjs
```

El script comprueba respuestas HTTP, un H1 y un main por página, títulos únicos, canónicas, datos estructurados, ausencia de Analytics antes del consentimiento, sitemap, redirecciones, imagen social, CVs y respuesta 404. TEST_BASE_URL permite comprobar otra instancia.

## Contenido y configuración

- `lib/site.ts`: dominio canónico, metadatos compartidos, CV y contactos.
- `data.tsx`: trayectoria, proyectos y servicios. Mantener únicamente información demostrable.
- `components/introduction.tsx`: presentación orientada a contratación.
- `app/(routes)/portfolio/auditoria-seo/page.tsx`: caso técnico del propio portafolio; no atribuye mejoras de tráfico sin datos.
- `public/downloable/`: currículums existentes en español e inglés. No se ha modificado su contenido.
- `public/opengraph-image.png`: tarjeta social de 1200 × 630.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: código opcional de verificación de Search Console, en `.env.local` o en el proveedor de despliegue.
- Analytics conserva el ID existente y solo se carga al aceptar. El botón Configurar cookies permite cambiar la elección. No se incrusta Google Maps automáticamente.
- Se utiliza tipografía del sistema para evitar descargas de fuentes durante la compilación.

## Revisión de noviembre de 2026

Se corrigieron las rutas del sitemap, se añadieron redirecciones de las variantes en español, se unificaron metadatos sociales y canónicas, se hizo visible el H1 y se priorizaron CV, trayectoria y contacto. Se retiraron demos vacías y contadores de la página de trayectoria, se optimizaron imágenes de proyectos y se añadieron foco visible, salto al contenido y respeto a movimiento reducido.

Validación: build de producción completado, comprobaciones HTTP/SEO superadas y portada revisada en navegador; rechazo de cookies comprobado en la interfaz. No se ha realizado auditoría Lighthouse, prueba visual móvil ni verificación de eventos reales de GA4. Quedan avisos preexistentes por iconos SVG externos con img y la base Browserslist antigua.

## Pendientes antes y después de publicar

1. Actualizar Next.js y eslint-config-next a una versión mantenida y corregida, con versiones compatibles de React; repetir build y comprobaciones. El proyecto conserva Next.js 14.2.4: la consulta al registro npm devolvió EACCES en este entorno y no se modificó el lockfile sin poder resolver ni comprobar dependencias. Referencia oficial: https://nextjs.org/support-policy
2. Revisar que los dos CV reflejan el perfil SEO, fechas y disponibilidad actuales. Añadir casos de clientes solo con autorización y evidencia: periodo, responsabilidad, acciones y resultados de Search Console.
3. Publicar mediante el flujo habitual del repositorio. Esta revisión solo modifica el checkout local; no se ha hecho push ni desplegado.
4. Confirmar que el dominio canónico es el dominio final, enviar `/sitemap.xml` en Search Console e inspeccionar las cinco páginas públicas.
5. Registrar una línea base de impresiones, clics, CTR y consultas por página. Comparar periodos equivalentes tras indexación. No se promete una mejora de ranking ni un plazo de contratación.
6. Verificar en navegador móvil y en producción la navegación, las descargas, los eventos de GA4 y que no haya solicitudes analíticas antes de aceptar o después de rechazar.

Fuentes de criterios SEO: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap y https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls

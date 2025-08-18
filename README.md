# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
# María Mercedes Varela — Sitio web (Astro + Bootstrap)

Este repositorio contiene la web del atelier de confección infantil, construida con Astro y Bootstrap. Este README recoge los pasos para desarrollo local, build, estructura del proyecto y recomendaciones SEO antes del lanzamiento.

Resumen rápido
- Framework: Astro
- Estilos: Bootstrap + tokens CSS
- Estructura: componentes en `src/components`, layout en `src/layouts/Layout.astro`, assets en `public/`

Checklist — lo que cubre este README
- Ejecutar el proyecto en local (instalación y dev).
- Construir y previsualizar producción.
- Dónde editar contenido (hero, servicios, galería, contacto).
- Qué cambiar cuando tengas dominio (robots/sitemap/OG/JSON‑LD).
- Buenas prácticas de accesibilidad y SEO (alt, H1, canonical).

Requisitos
- Node.js (16+ recomendado)
- npm (o pnpm/yarn)

Comandos (PowerShell)

Instalar dependencias:

```powershell
npm install
```

Desarrollo (hot-reload):

```powershell
npm run dev
# o
npx astro dev
```

Build y preview:

```powershell
npm run build
npm run preview
```

Si no existen en `package.json`, añade estos scripts:

```json
"scripts": {
	"dev": "astro dev",
	"build": "astro build",
	"preview": "astro preview"
}
```

Estructura importante

- `src/layouts/Layout.astro` — plantilla principal: aquí están las meta tags y carga de Bootstrap.
- `src/components/Inicio.astro` — hero / cabecera.
- `src/components/Header.astro` — barra de navegación y lógica de scroll/active.
- `src/components/SobreMi.astro` — sección "Sobre mí".
- `src/components/Servicios.astro` — servicios y descripciones.
- `src/components/CarruselFotos.astro` — galería/carousel.
- `src/components/Contacto.astro` — métodos de contacto y CTA.
- `public/` — imágenes, `robots.txt`, `sitemap.xml`, favicon.

SEO y preparación para dominio (qué cambiar)

1. `public/robots.txt`: actualiza la línea `Sitemap:` con tu dominio real (https://tudominio.com/sitemap.xml).
2. `public/sitemap.xml`: reemplaza `https://example.com/...` por `https://tudominio.com/...` en todas las entradas.
3. `src/layouts/Layout.astro`: actualiza `og:url`, `og:image`, `canonical` y el JSON‑LD (url, image, telephone, address) con tu dominio y datos reales.
4. Registrar propiedad en Google Search Console y subir `sitemap.xml` para indexación.

Buenas prácticas SEO & accesibilidad

- Usa `alt` descriptivos en todas las imágenes.
- Mantén una etiqueta `h1` única por página; organiza el contenido con `h2/h3` según jerarquía.
- Para contenido que debe ocultarse visualmente pero seguir accesible, usa `visually-hidden` en lugar de `d-none`.
- Usa URLs absolutas en Open Graph y JSON‑LD.

Consejos de producción

- Optimiza imágenes (WebP/AVIF) y añade `loading="lazy"` donde corresponda.
- Configura HTTPS y decide canonical (www vs no‑www) — usa la misma variante en meta tags.
- Genera el sitemap automáticamente si el sitio crece (script en build) en vez de editar manualmente.

Notas de desarrollo

- Navbar y comportamiento de scroll están en `Header.astro` con un pequeño JS inline; prueba anchors en dev para ajustar offsets.
- La animación `fade-up` se gestiona por IntersectionObserver — revisa `Header.astro` si los elementos no aparecen.

¿Quieres que lo actualice por ti?

Puedo:
- Poner tu dominio directamente en `robots.txt`, `sitemap.xml` y `Layout.astro` ahora.
- Añadir un script de generación de sitemap en el build.
- Preparar un `deploy` script para Netlify/Vercel.

Dime qué prefieres y lo aplico.

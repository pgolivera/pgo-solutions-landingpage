# PGO Solutions Landing Page

Landing page moderna y mobile-first para **PGO Solutions**, con un mockup de iPhone como elemento central que muestra los productos mediante un carrusel interactivo.

## Productos

- **FacturApp** - App de facturacion simple y rapida
- **Landing Factory** - Creacion de landing pages profesionales
- **BotSellers** - Agentes de WhatsApp para pedidos y ventas automatizadas

## Caracteristicas

- **Next.js 15** con App Router y React 19
- **iPhone Mockup** - Frame CSS puro sin imagenes externas
- **Carrusel nativo** - Scroll-snap sin dependencias
- **100% Responsive** - Mobile-first design
- **SEO Optimizado** - Metadata API nativa de Next.js
- **TypeScript** - Tipado estatico completo
- **Testing** - Vitest + Playwright

## Estructura

```
src/
├── app/
│   ├── layout.tsx          # Layout con metadata SEO
│   └── page.tsx             # Pagina principal
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Navegacion con menu mobile
│   │   └── Footer.tsx       # Footer con links
│   ├── sections/
│   │   ├── Hero.tsx         # Seccion principal con iPhone
│   │   ├── About.tsx        # Sobre nosotros
│   │   └── Contact.tsx      # Contacto y WhatsApp
│   └── ui/
│       ├── IPhoneMockup.tsx     # Frame del iPhone
│       ├── ProductCarousel.tsx  # Carrusel de productos
│       └── ProductSlide.tsx     # Slide individual
├── styles/
│   ├── variables.css        # Variables CSS
│   └── index.css            # Estilos globales
└── constants.ts             # Configuracion del sitio
```

## Requisitos

- **Node.js** 18.17 o superior
- **Yarn** 1.22.22

## Instalacion

```bash
yarn install
```

## Scripts

```bash
yarn dev          # Servidor de desarrollo
yarn build        # Build de produccion
yarn start        # Servidor de produccion
yarn test         # Tests unitarios
yarn test:e2e     # Tests E2E
yarn lint         # Linting
yarn ci           # Pipeline completo
```

## Configuracion

Edita `src/constants.ts` para personalizar:

- **SITE_CONFIG** - Nombre y descripcion del sitio
- **SEO_CONFIG** - Metadata y Open Graph

## Deployment

```bash
yarn build
yarn start
```

Compatible con Vercel, Netlify y cualquier plataforma Node.js.

---

**PGO Solutions** - Soluciones digitales que impulsan tu negocio

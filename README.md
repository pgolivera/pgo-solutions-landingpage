# PGO Solutions Template

Template robusto, ligero y optimizado para SEO basado en **Next.js 15** con App Router.

## 🚀 Características

- ⚡ **Next.js 15** con App Router y React 19
- 📱 **100% Responsive** - Diseño adaptable a todos los dispositivos
- 🎨 **CSS Variables** - Sistema de diseño personalizable y mantenible
- 🔍 **SEO Optimizado** - Metadata API nativa de Next.js
- ✅ **Testing Completo**
  - Unit tests con Vitest
  - E2E tests con Playwright
  - Testing Library integrado
- 📦 **TypeScript** - Tipado estático completo
- 🧹 **Code Quality**
  - ESLint configurado
  - Detección de código duplicado (JSCPD)
  - Type checking automatizado
- 🎯 **Developer Experience** - Configuración lista para desarrollo productivo

## 📋 Requisitos

- **Node.js** 18.17 o superior
- **Yarn** 1.22.22 (especificado en `packageManager`)

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd pgo-next-template

# Instalar dependencias
yarn install
```

## 🎮 Scripts Disponibles

### Desarrollo

```bash
yarn dev          # Inicia el servidor de desarrollo en http://localhost:3000
yarn build        # Construye la aplicación para producción
yarn start        # Inicia el servidor de producción
```

### Testing

```bash
yarn test         # Ejecuta tests unitarios
yarn test:watch   # Ejecuta tests en modo watch
yarn test:coverage # Genera reporte de cobertura
yarn test:ui      # Abre la interfaz de Vitest
yarn test:e2e     # Ejecuta tests E2E con Playwright
```

### Calidad de Código

```bash
yarn lint         # Ejecuta ESLint
yarn lint:fix     # Corrige automáticamente problemas de linting
yarn typecheck    # Verifica tipos TypeScript
yarn dupes        # Detecta código duplicado
yarn ci           # Ejecuta todos los checks (CI pipeline)
```

## 📁 Estructura del Proyecto

```
pgo-next-template/
├── src/
│   ├── app/              # App Router de Next.js
│   │   ├── layout.tsx    # Layout raíz con metadata SEO
│   │   └── page.tsx      # Página principal
│   ├── components/       # Componentes reutilizables
│   │   ├── layout/       # Componentes de layout
│   │   ├── sections/     # Secciones de página
│   │   ├── ui/           # Componentes UI básicos
│   │   └── lib/          # Utilidades de componentes
│   ├── styles/           # Estilos globales y CSS
│   └── constants.ts      # Configuración centralizada
├── tests/
│   ├── e2e/              # Tests end-to-end
│   └── setup.ts          # Configuración de testing
├── public/               # Archivos estáticos
└── scripts/              # Scripts de utilidad
```

## ⚙️ Configuración

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_API_URL=https://api.tu-dominio.com
```

### Constantes del Sitio

Edita `src/constants.ts` para personalizar:

- **SITE_CONFIG**: Nombre, descripción y URL del sitio
- **SEO_CONFIG**: Configuración de metadata y Open Graph
- **ROUTES**: Rutas de la aplicación
- **API_CONFIG**: Configuración de API
- **BREAKPOINTS**: Puntos de quiebre responsive

## 🎨 Personalización

### CSS Variables

El sistema de diseño está basado en variables CSS definidas en `src/styles/`. Personaliza colores, tipografía y espaciados modificando:

```css
:root {
  --color-primary: #1a1a2e;
  --color-secondary: #16213e;
  /* ... más variables */
}
```

### Metadata SEO

La metadata se gestiona en `src/app/layout.tsx` utilizando la Metadata API de Next.js:

```typescript
export const metadata: Metadata = {
  title: SEO_CONFIG.defaultTitle,
  description: SEO_CONFIG.defaultDescription,
  // ... configuración completa
};
```

## 🚢 Deployment

### Vercel (Recomendado)

```bash
# Instala Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build Manual

```bash
yarn build
yarn start
```

El build se genera en `.next/` y está optimizado para producción.

## 🧪 Testing

### Unit Tests

Los tests unitarios están configurados con Vitest y Testing Library:

```bash
# Ejecutar tests
yarn test

# Con watch mode
yarn test:watch

# Con interfaz gráfica
yarn test:ui
```

### E2E Tests

Los tests end-to-end usan Playwright:

```bash
# Ejecutar tests E2E
yarn test:e2e

# Modo UI
yarn test:e2e --ui
```

## 📦 Dependencias Principales

- **next** 15.1.0 - Framework React
- **react** 19.0.0 - Biblioteca UI
- **typescript** 5.7.2 - Tipado estático

### Dev Dependencies

- **@playwright/test** - Testing E2E
- **vitest** - Testing unitario
- **@testing-library/react** - Utilidades de testing
- **eslint** - Linting
- **jscpd** - Detección de duplicados

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de uso privado.

## 👨‍💻 Autor

**PGO Solutions**

---

Hecho con ❤️ usando Next.js 15

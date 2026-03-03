// =============================================================================
// Site Configuration
// =============================================================================

export const SITE_CONFIG = {
  name: "PGO Solutions",
  shortName: "PGO Solutions",
  description: "Soluciones digitales que impulsan tu negocio. FacturApp, Landing Factory y BotSellers para automatizar y potenciar tus ventas.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://pgosolutions.com",
  locale: "es_AR",
  themeColor: "#1a1a2e",
};

// =============================================================================
// SEO Configuration
// =============================================================================

export const SEO_CONFIG = {
  siteName: SITE_CONFIG.name,
  defaultTitle: SITE_CONFIG.name,
  titleTemplate: `%s | ${SITE_CONFIG.name}`,
  defaultDescription: SITE_CONFIG.description,
  defaultKeywords: ["facturacion", "landing pages", "whatsapp bot", "automatizacion", "ventas", "argentina", "PGO Solutions"],
  defaultImage: "/images/og-image.png",
  baseUrl: SITE_CONFIG.url,
  twitterHandle: "@pgosolutions",
};

// =============================================================================
// Routes
// =============================================================================

export const ROUTES = {
  HOME: "/",
} as const;

// =============================================================================
// API Configuration
// =============================================================================

export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "",
  timeout: 30000,
} as const;

// =============================================================================
// Breakpoints (matching CSS variables)
// =============================================================================

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536,
} as const;

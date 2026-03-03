// =============================================================================
// Site Configuration
// =============================================================================

export const SITE_CONFIG = {
  name: "PGO Landing Template",
  shortName: "PGO Template",
  description: "A robust, lightweight, and SEO-optimized Next.js landing page template.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com",
  locale: "en_US",
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
  defaultKeywords: ["nextjs", "typescript", "landing-page", "seo", "template"],
  defaultImage: "/images/og-image.png",
  baseUrl: SITE_CONFIG.url,
  twitterHandle: "@yourhandle",
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

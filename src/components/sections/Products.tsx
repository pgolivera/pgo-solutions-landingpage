import Link from "next/link";
import styles from "./Products.module.css";

const PRODUCTS = [
  {
    icon: "⚡",
    name: "Landing Factory",
    tagline: "Tu presencia web, a medida y sin vueltas",
    description:
      "Creamos landing pages profesionales que cuentan tu historia y convierten visitantes en clientes. Diseño único, carga ultra rápida y copy que comunica tu valor real.",
    status: "active" as const,
    statusLabel: "Activo",
    color: "green" as const,
    href: "/productos/landing-factory",
  },
  {
    icon: "📋",
    name: "FacturApp",
    tagline: "Facturación sin complicaciones",
    description:
      "Una aplicación simple, rápida e intuitiva para gestionar tus facturas y finanzas. Diseñada para emprendedores y pequeñas empresas que quieren ordenarse sin perder tiempo.",
    status: "dev" as const,
    statusLabel: "En desarrollo",
    color: "amber" as const,
    href: null,
  },
  {
    icon: "🤖",
    name: "BotSeller",
    tagline: "Tu vendedor que nunca duerme",
    description:
      "Agentes de WhatsApp inteligentes que atienden consultas, toman pedidos y gestionan ventas de forma automática las 24 horas, los 7 días de la semana.",
    status: "soon" as const,
    statusLabel: "Próximamente",
    color: "dark" as const,
    href: null,
  },
];

const colorClass: Record<string, string> = {
  green: styles.cardGreen,
  amber: styles.cardAmber,
  dark: styles.cardDark,
};

const statusClass: Record<string, string> = {
  active: styles.badgeActive,
  dev: styles.badgeDev,
  soon: styles.badgeSoon,
};

function CardContent({ product }: { product: (typeof PRODUCTS)[number] }) {
  return (
    <>
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon} aria-hidden="true">
          {product.icon}
        </span>
        <span className={`${styles.badge} ${statusClass[product.status]}`}>{product.statusLabel}</span>
      </div>
      <h3 className={styles.cardName}>{product.name}</h3>
      <p className={styles.cardTagline}>{product.tagline}</p>
      <p className={styles.cardDesc}>{product.description}</p>
      {product.href && (
        <span className={styles.cardCta} aria-hidden="true">
          Ver proyectos →
        </span>
      )}
    </>
  );
}

export default function Products() {
  return (
    <section className={styles.products} id="productos">
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Lo que hacemos</span>
          <h2 className={styles.sectionTitle}>Nuestros productos</h2>
          <p className={styles.sectionSubtitle}>
            Tres herramientas diseñadas para resolver problemas reales de negocios digitales.
          </p>
        </header>

        <div className={styles.grid}>
          {PRODUCTS.map((product) =>
            product.href ? (
              <Link
                key={product.name}
                href={product.href}
                className={`${styles.card} ${styles.cardLink} ${colorClass[product.color]}`}
              >
                <CardContent product={product} />
              </Link>
            ) : (
              <article key={product.name} className={`${styles.card} ${colorClass[product.color]}`}>
                <CardContent product={product} />
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

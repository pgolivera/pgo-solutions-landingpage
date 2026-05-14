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
  },
];

const CLIENTS = [
  { icon: "👗", type: "Indumentaria & moda", project: "Landing de temporada" },
  { icon: "🏠", type: "Inmobiliaria boutique", project: "Sitio de captación" },
  { icon: "🎯", type: "Coaching empresarial", project: "Landing de servicios" },
  { icon: "🍽️", type: "Gastronomía & delivery", project: "Menú digital" },
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
          {PRODUCTS.map((product) => (
            <article key={product.name} className={`${styles.card} ${colorClass[product.color]}`}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon} aria-hidden="true">
                  {product.icon}
                </span>
                <span className={`${styles.badge} ${statusClass[product.status]}`}>{product.statusLabel}</span>
              </div>
              <h3 className={styles.cardName}>{product.name}</h3>
              <p className={styles.cardTagline}>{product.tagline}</p>
              <p className={styles.cardDesc}>{product.description}</p>
            </article>
          ))}
        </div>

        {/* Landing Factory showcase */}
        <div className={styles.showcase}>
          <div className={styles.showcaseHeader}>
            <span className={styles.showcaseIcon} aria-hidden="true">
              ⚡
            </span>
            <div>
              <h3 className={styles.showcaseTitle}>Empresas que confiaron en PGO Solutions</h3>
              <p className={styles.showcaseSubtitle}>Proyectos realizados a través de Landing Factory</p>
            </div>
          </div>

          <div className={styles.clientsGrid}>
            {CLIENTS.map((client, i) => (
              <div key={i} className={styles.clientCard}>
                <span className={styles.clientIcon} aria-hidden="true">
                  {client.icon}
                </span>
                <div className={styles.clientInfo}>
                  <p className={styles.clientType}>{client.type}</p>
                  <p className={styles.clientProject}>{client.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

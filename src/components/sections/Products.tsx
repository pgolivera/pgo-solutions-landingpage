import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import styles from "./Products.module.css";

export default async function Products() {
  const t = await getTranslations("products");

  const PRODUCTS = [
    {
      icon: "⚡",
      name: "Landing Factory",
      tagline: t("landingFactoryTagline"),
      description: t("landingFactoryDesc"),
      status: "active" as const,
      statusLabel: t("landingFactoryStatus"),
      color: "green" as const,
      href: "/productos/landing-factory" as const,
    },
    {
      icon: "📋",
      name: "FacturApp",
      tagline: t("facturAppTagline"),
      description: t("facturAppDesc"),
      status: "dev" as const,
      statusLabel: t("facturAppStatus"),
      color: "amber" as const,
      href: "/productos/facturapp" as const,
    },
    {
      icon: "🤖",
      name: "BotSeller",
      tagline: t("botSellerTagline"),
      description: t("botSellerDesc"),
      status: "soon" as const,
      statusLabel: t("botSellerStatus"),
      color: "dark" as const,
      href: "/productos/botseller" as const,
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

  return (
    <section className={styles.products} id="productos">
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <span className={styles.eyebrow}>{t("eyebrow")}</span>
          <h2 className={styles.sectionTitle}>{t("title")}</h2>
          <p className={styles.sectionSubtitle}>{t("subtitle")}</p>
        </header>

        <div className={styles.grid}>
          {PRODUCTS.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className={`${styles.card} ${styles.cardLink} ${colorClass[product.color]}`}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon} aria-hidden="true">
                  {product.icon}
                </span>
                <span className={`${styles.badge} ${statusClass[product.status]}`}>{product.statusLabel}</span>
              </div>
              <h3 className={styles.cardName}>{product.name}</h3>
              <p className={styles.cardTagline}>{product.tagline}</p>
              <p className={styles.cardDesc}>{product.description}</p>
              <span className={styles.cardCta} aria-hidden="true">
                {t("viewProjects")}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

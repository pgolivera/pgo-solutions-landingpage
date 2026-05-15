import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import styles from "./Footer.module.css";

const PRODUCTS = [
  { name: "Landing Factory", href: "/productos/landing-factory" as const },
  { name: "FacturApp", href: "/productos/facturapp" as const },
  { name: "BotSeller", href: "/productos/botseller" as const },
];

export default async function Footer() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "/" as const, label: t("home") },
    { href: "/#productos" as const, label: tNav("products") },
    { href: "/sobre-mi" as const, label: tNav("about") },
    { href: "/#contacto" as const, label: tNav("contact") },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <span className={styles.logo}>
              <span className={styles.logoMark}>PGO</span>
              <span className={styles.logoDot}>·</span>
              <span className={styles.logoWord}>Solutions</span>
            </span>
            <p className={styles.brandText}>{t("tagline")}</p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{t("navTitle")}</h4>
            <nav className={styles.columnLinks} aria-label={t("footerNavLabel")}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{t("productsTitle")}</h4>
            <nav className={styles.columnLinks} aria-label={t("productsNavLabel")}>
              {PRODUCTS.map((product) => (
                <Link key={product.name} href={product.href} className={styles.link}>
                  {product.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>{t("copyright", { year: currentYear })}</p>
          <a href="mailto:contacto@pgosolutions.com" className={styles.contactLink}>
            contacto@pgosolutions.com
          </a>
        </div>
      </div>
    </footer>
  );
}

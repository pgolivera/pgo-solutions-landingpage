import Link from "next/link";
import styles from "./Footer.module.css";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/#productos", label: "Productos" },
  { href: "/sobre-mi", label: "Nosotros" },
  { href: "/#contacto", label: "Contacto" },
];

const PRODUCTS = [
  { name: "Landing Factory", href: "/productos/landing-factory" },
  { name: "FacturApp", href: "/#productos" },
  { name: "BotSeller", href: "/#productos" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
            <p className={styles.brandText}>
              Soluciones digitales que impulsan negocios reales. Buenos Aires, Argentina.
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Navegación</h4>
            <nav className={styles.columnLinks} aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <Link key={link.label} href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Productos</h4>
            <nav className={styles.columnLinks} aria-label="Products navigation">
              {PRODUCTS.map((product) => (
                <Link key={product.name} href={product.href} className={styles.link}>
                  {product.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© {currentYear} PGO Solutions. Todos los derechos reservados.</p>
          <a href="mailto:contacto@pgosolutions.com" className={styles.contactLink}>
            contacto@pgosolutions.com
          </a>
        </div>
      </div>
    </footer>
  );
}

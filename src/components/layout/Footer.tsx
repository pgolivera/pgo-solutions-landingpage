import styles from "./Footer.module.css";

const FOOTER_LINKS = [
  { href: "#hero", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

const PRODUCTS = [
  { name: "FacturApp", href: "#hero" },
  { name: "Landing Factory", href: "#hero" },
  { name: "BotSellers", href: "#hero" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <span className={styles.logo}>PGO Solutions</span>
            <p className={styles.brandText}>
              Soluciones digitales que impulsan tu negocio hacia el futuro.
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Navegacion</h4>
            <nav className={styles.columnLinks}>
              {FOOTER_LINKS.map((link) => (
                <a key={link.href} href={link.href} className={styles.link}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Productos</h4>
            <nav className={styles.columnLinks}>
              {PRODUCTS.map((product) => (
                <a key={product.name} href={product.href} className={styles.link}>
                  {product.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            {currentYear} PGO Solutions. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

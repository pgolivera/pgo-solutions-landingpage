import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Agencia Digital · Buenos Aires, Argentina</span>
          <h1 className={styles.title}>
            Hacemos que tu presencia digital <em className={styles.titleEm}>trabaje para vos</em>
          </h1>
          <p className={styles.subtitle}>
            Diseñamos y desarrollamos landing pages, aplicaciones web y herramientas digitales que convierten visitantes
            en clientes reales.
          </p>
          <div className={styles.cta}>
            <a href="#contacto" className={styles.ctaPrimary}>
              Iniciar un proyecto
            </a>
            <a href="#productos" className={styles.ctaSecondary}>
              Ver nuestros productos
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={`${styles.card} ${styles.cardGreen}`}>
            <span className={styles.cardIcon}>⚡</span>
            <p className={styles.cardName}>Landing Factory</p>
            <p className={styles.cardDesc}>Landing pages que convierten</p>
          </div>
          <div className={`${styles.card} ${styles.cardAmber}`}>
            <span className={styles.cardIcon}>📋</span>
            <p className={styles.cardName}>FacturApp</p>
            <p className={styles.cardDesc}>Facturación simple para tu negocio</p>
          </div>
          <div className={`${styles.card} ${styles.cardDark}`}>
            <span className={styles.cardIcon}>🤖</span>
            <p className={styles.cardName}>BotSeller</p>
            <p className={styles.cardDesc}>Ventas automatizadas por WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import IPhoneMockup from "@/components/ui/IPhoneMockup";
import ProductCarousel from "@/components/ui/ProductCarousel";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>PGO Solutions</span>
          <h1 className={styles.title}>
            Herramientas que
            <span className={styles.highlight}> impulsan tu negocio</span>
          </h1>
          <p className={styles.subtitle}>
            Creamos soluciones tecnologicas que simplifican tus procesos y
            potencian tus ventas. Descubre nuestros productos.
          </p>
          <div className={styles.cta}>
            <a href="#contacto" className={styles.ctaButton}>
              Contactanos
            </a>
            <a href="#nosotros" className={styles.ctaSecondary}>
              Conoce mas
            </a>
          </div>
        </div>

        <div className={styles.mockupWrapper}>
          <IPhoneMockup>
            <ProductCarousel />
          </IPhoneMockup>
          <p className={styles.swipeHint}>Desliza para ver productos</p>
        </div>
      </div>
    </section>
  );
}

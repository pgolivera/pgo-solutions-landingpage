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
            Creamos soluciones tecnológicas que simplifican tus procesos y potencian tus ventas. Descubrí nuestros
            productos.
          </p>
          <div className={styles.cta}>
            <a href="#contacto" className={styles.ctaButton}>
              Contáctanos
            </a>
            <a href="#nosotros" className={styles.ctaSecondary}>
              Conocé más
            </a>
          </div>
        </div>

        <div className={styles.mockupWrapper}>
          <IPhoneMockup>
            <ProductCarousel />
          </IPhoneMockup>
          <p className={styles.swipeHint}>Deslizá para ver productos</p>
        </div>
      </div>
    </section>
  );
}

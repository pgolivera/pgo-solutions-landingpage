import { ReactNode } from "react";
import styles from "./About.module.css";

const FEATURES: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 21h4M12 2a7 7 0 017 7c0 2.5-1.3 4.7-3.3 6L14 17H10l-1.7-2C6.3 13.7 5 11.5 5 9a7 7 0 017-7z"/>
      </svg>
    ),
    title: "Innovacion",
    description: "Creamos soluciones modernas que se adaptan a las necesidades reales de tu negocio.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: "Velocidad",
    description: "Desarrollo agil y entregas rapidas sin sacrificar la calidad del producto final.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Soporte",
    description: "Acompanamiento continuo para que tu negocio siempre este funcionando al 100%.",
  },
];

export default function About() {
  return (
    <section className={styles.about} id="nosotros">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Sobre Nosotros</h2>
          <p className={styles.subtitle}>
            Somos un equipo apasionado por la tecnologia, dedicado a crear
            herramientas que transforman la manera en que los negocios operan
            y se conectan con sus clientes.
          </p>
        </div>

        <div className={styles.features}>
          {FEATURES.map((feature) => (
            <div key={feature.title} className={styles.feature}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>3+</span>
            <span className={styles.statLabel}>Productos</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Compromiso</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Disponibilidad</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import styles from "./About.module.css";

const FEATURES = [
  {
    icon: "\u{1F4A1}",
    title: "Innovacion",
    description: "Creamos soluciones modernas que se adaptan a las necesidades reales de tu negocio.",
  },
  {
    icon: "\u{26A1}",
    title: "Velocidad",
    description: "Desarrollo agil y entregas rapidas sin sacrificar la calidad del producto final.",
  },
  {
    icon: "\u{1F91D}",
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

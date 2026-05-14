import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Landing Factory | PGO Solutions",
  description:
    "Landing pages profesionales que convierten visitantes en clientes. Conocé los proyectos realizados por PGO Solutions.",
};

const CLIENTS = [
  {
    name: "Fletes Ferro",
    sector: "Transporte & Logística",
    description: "Fletes, mudanzas y transporte de cargas en Luján y todo el país.",
    image: "/images/cliente-fletes-ferro.png",
    href: "https://fletes-ferro.netlify.app/",
  },
];

const FEATURES = [
  {
    icon: "✏️",
    title: "Diseño a medida",
    description: "Cada página es única, pensada para tu negocio y tu audiencia.",
  },
  {
    icon: "⚡",
    title: "Carga ultra rápida",
    description: "Optimización de performance desde el primer deploy.",
  },
  {
    icon: "📈",
    title: "Copy que convierte",
    description: "Texto estratégico que comunica tu valor y empuja a la acción.",
  },
];

export default function LandingFactory() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <Link href="/#productos" className={styles.backLink}>
              ← Volver a productos
            </Link>
            <div className={styles.heroBadge}>Landing Factory</div>
            <h1 className={styles.heroTitle}>
              Landing pages que <em className={styles.heroTitleEm}>convierten de verdad</em>
            </h1>
            <p className={styles.heroSubtitle}>
              Diseñamos y desarrollamos páginas de aterrizaje profesionales con copy estratégico, diseño a medida y
              velocidad optimizada. Tu primera impresión importa.
            </p>
            <Link href="/#contacto" className={styles.heroCta}>
              Quiero mi landing page
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className={styles.features}>
          <div className={styles.featuresContainer}>
            {FEATURES.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <span className={styles.featureIcon} aria-hidden="true">
                  {f.icon}
                </span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Client showcase */}
        <section className={styles.showcase}>
          <div className={styles.showcaseContainer}>
            <header className={styles.showcaseHeader}>
              <span className={styles.eyebrow}>Nuestro trabajo</span>
              <h2 className={styles.showcaseTitle}>Empresas que confiaron en PGO Solutions</h2>
              <p className={styles.showcaseSubtitle}>
                Cada proyecto comienza con una conversación. Entendemos el negocio antes de escribir una sola línea de
                código.
              </p>
            </header>

            <div className={styles.projectsGrid}>
              {CLIENTS.map((client) => (
                <a
                  key={client.name}
                  href={client.href}
                  className={styles.projectCard}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.projectImageWrapper}>
                    <Image
                      src={client.image}
                      alt={`Sitio web de ${client.name}`}
                      fill
                      className={styles.projectImage}
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className={styles.projectInfo}>
                    <div>
                      <span className={styles.projectSector}>{client.sector}</span>
                      <h3 className={styles.projectName}>{client.name}</h3>
                      <p className={styles.projectDesc}>{client.description}</p>
                    </div>
                    <span className={styles.projectLink}>Ver sitio →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaContainer}>
            <h2 className={styles.ctaTitle}>¿Querés tu propia landing?</h2>
            <p className={styles.ctaSubtitle}>Contame tu proyecto y te respondo en menos de 24 horas.</p>
            <Link href="/#contacto" className={styles.ctaButton}>
              Iniciar un proyecto
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

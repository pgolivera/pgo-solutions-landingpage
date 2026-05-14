import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sobre mí | PGO Solutions",
  description:
    "Conocé a Pablo Olivera: Software Engineer, más de una década en finanzas B2B y el fundador detrás de PGO Solutions.",
};

const SKILLS = [
  { label: "Frontend & Mobile", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"] },
  { label: "Backend & Cloud", items: ["Ruby on Rails", "AWS (S3, CloudFront)", "CI/CD", "GitHub Actions"] },
  { label: "Testing & Calidad", items: ["Vitest", "Jest", "Testing Library", "Cypress"] },
];

const TRAJECTORY = [
  {
    year: "2010",
    title: "El mundo corporativo",
    description:
      "Egresado técnico electrónico, con curiosidad innata por la tecnología pero los caminos me llevaron al mundo financiero. Empecé como analista de cobranzas en Medife, desarrollando una visión profunda del negocio B2B que hoy es mi mayor diferenciador.",
  },
  {
    year: "2017",
    title: "Primer puente tecnológico",
    description:
      "En Lincoln Electric fui el nexo entre el área de finanzas y los consultores de SAP durante la migración de Tango a SAP. Por primera vez, mi costado técnico encontró un lugar real en el mundo corporativo. Lo repetí años después en Agrofina.",
  },
  {
    year: "2022",
    title: "El giro definitivo",
    description:
      "La curiosidad técnica que llevaba años dormida volvió con fuerza. Empecé a aprender desarrollo web de forma autodidacta: React, TypeScript, Next.js. Aprendiendo mientras hacía, como siempre. Hoy formalizo ese camino con una Diplomatura en Desarrollo Full Stack.",
  },
  {
    year: "2024",
    title: "Software Engineer de tiempo completo",
    description:
      "Di el salto definitivo a la industria tech como Frontend Engineer en Insight Delta. Arquitectura de productos, CI/CD en AWS, liderazgo de testing con Vitest, integración con Ruby on Rails. Del mundo financiero al tech, sin perder de vista el negocio.",
  },
  {
    year: "Hoy",
    title: "PGO Solutions",
    description:
      "Nació como un proyecto paralelo que une lo mejor de los dos mundos: el conocimiento B2B de más de una década en el sector corporativo y las habilidades técnicas que fui construyendo. Ofrezco desarrollo a medida para empresas que saben lo que necesitan porque yo estuve del otro lado del mostrador.",
  },
];

export default function SobreMi() {
  return (
    <>
      <Header />
      <main>
        {/* Intro */}
        <section className={styles.intro}>
          <div className={styles.introContainer}>
            <Link href="/" className={styles.backLink}>
              ← Volver al inicio
            </Link>

            <div className={styles.introGrid}>
              <div className={styles.photoCol}>
                <div className={styles.photoWrapper}>
                  <div className={styles.photo}>
                    <Image
                      src="/images/pablo-olivera.png"
                      alt="Pablo Olivera"
                      width={280}
                      height={280}
                      className={styles.photoImg}
                      priority
                    />
                  </div>
                </div>

                <div className={styles.socialLinks}>
                  <a
                    href="https://www.linkedin.com/in/pablo-olivera/"
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver perfil de LinkedIn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/pgolivera"
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver perfil de GitHub"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>

              <div className={styles.introText}>
                <span className={styles.eyebrow}>Sobre mí</span>
                <h1 className={styles.introTitle}>
                  Hola, soy <em className={styles.introTitleEm}>Pablo</em>
                </h1>
                <div className={styles.introBio}>
                  <p>
                    Software Engineer con más de 3 años en el mundo tech y más de una década antes en el sector
                    corporativo. Trabajo en Insight Delta construyendo productos de principio a fin: arquitectura
                    frontend, infraestructura en AWS y automatización de CI/CD.
                  </p>
                  <p>
                    Vengo del mundo de las finanzas B2B — cobranzas, crédito, migraciones SAP — y ese recorrido me da
                    algo que pocos developers tienen: entiendo el negocio desde adentro. PGO Solutions nació de esa
                    combinación: desarrollo de software con visión de negocio real.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trajectory */}
        <section className={styles.trajectory}>
          <div className={styles.trajectoryContainer}>
            <header className={styles.sectionHeader}>
              <span className={styles.eyebrow}>Mi recorrido</span>
              <h2 className={styles.sectionTitle}>
                El camino hasta <em className={styles.sectionTitleEm}>acá</em>
              </h2>
            </header>

            <div className={styles.timeline}>
              {TRAJECTORY.map((item, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                    <p className={styles.timelineDesc}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className={styles.skills}>
          <div className={styles.skillsContainer}>
            <header className={styles.sectionHeader}>
              <span className={styles.eyebrow}>Herramientas</span>
              <h2 className={styles.sectionTitle}>Con qué trabajo</h2>
            </header>

            <div className={styles.skillsGrid}>
              {SKILLS.map((group) => (
                <div key={group.label} className={styles.skillGroup}>
                  <h3 className={styles.skillGroupLabel}>{group.label}</h3>
                  <ul className={styles.skillList}>
                    {group.items.map((item) => (
                      <li key={item} className={styles.skillItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaContainer}>
            <h2 className={styles.ctaTitle}>¿Trabajamos juntos?</h2>
            <p className={styles.ctaSubtitle}>Si tenés un proyecto en mente, me encantaría escucharte.</p>
            <div className={styles.ctaButtons}>
              <Link href="/#contacto" className={styles.ctaPrimary}>
                Iniciar una conversación
              </Link>
              <Link href="/#productos" className={styles.ctaSecondary}>
                Ver nuestros productos →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

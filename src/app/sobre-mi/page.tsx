import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sobre mí | PGO Solutions",
  description: "Conocé a Pablo Olivera, el desarrollador y creador de productos digitales detrás de PGO Solutions.",
};

const SKILLS = [
  { label: "Frontend", items: ["Next.js", "React", "TypeScript", "CSS / Tailwind"] },
  { label: "Backend", items: ["Node.js", "Express", "REST APIs", "PostgreSQL"] },
  { label: "Diseño & Producto", items: ["UI/UX Design", "Figma", "SEO", "Analytics"] },
];

const TRAJECTORY = [
  {
    year: "Comienzos",
    title: "Los primeros pasos",
    description:
      "Empecé a aprender programación web de forma autodidacta, explorando el mundo del frontend y descubriendo el impacto que una buena interfaz puede tener en las personas.",
  },
  {
    year: "Freelance",
    title: "Primeros proyectos reales",
    description:
      "Di mis primeros pasos trabajando con emprendedores y pequeñas empresas de Buenos Aires. Cada proyecto fue una escuela: aprendí a escuchar al cliente, entender su negocio y traducirlo en código.",
  },
  {
    year: "PGO Solutions",
    title: "Formalizar la visión",
    description:
      "Con varios proyectos exitosos, decidí estructurar todo bajo PGO Solutions. La idea es simple: que cualquier negocio pueda acceder a herramientas digitales de calidad, sin importar su tamaño.",
  },
  {
    year: "Hoy",
    title: "Construyendo el ecosistema",
    description:
      "Desarrollo Landing Factory, FacturApp y BotSeller en paralelo. El objetivo es construir productos que resuelvan problemas reales y escalen con quienes los usan.",
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
                    Soy desarrollador y creador de productos digitales radicado en Buenos Aires, Argentina. Me
                    especializo en construir soluciones web que combinan diseño cuidado con tecnología sólida.
                  </p>
                  <p>
                    Fundé PGO Solutions con la convicción de que las herramientas digitales de calidad deben estar al
                    alcance de cualquier negocio, sin importar su tamaño. Cada proyecto es una oportunidad de entender
                    el problema y diseñar la solución correcta.
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

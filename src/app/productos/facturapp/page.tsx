import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "FacturApp | PGO Solutions",
  description:
    "Facturación simple, rápida e intuitiva para emprendedores y pequeñas empresas. En desarrollo por PGO Solutions.",
};

const FEATURES = [
  {
    icon: "📄",
    title: "Facturas en segundos",
    description: "Creá y enviá facturas profesionales en menos de un minuto, sin formularios complicados.",
  },
  {
    icon: "👥",
    title: "Gestión de clientes",
    description: "Guardá tu cartera de clientes y accedé a su historial de facturación con un clic.",
  },
  {
    icon: "📊",
    title: "Reportes claros",
    description: "Visualizá tus ingresos y facturación mensual de forma simple y ordenada.",
  },
  {
    icon: "📱",
    title: "100% desde el celular",
    description: "Diseñada mobile-first para que puedas facturar desde donde estés.",
  },
  {
    icon: "🔒",
    title: "Segura y confiable",
    description: "Tus datos protegidos, con backups automáticos y acceso solo para vos.",
  },
  {
    icon: "⚡",
    title: "Sin curva de aprendizaje",
    description: "Interfaz pensada para quienes no son técnicos. Si podés usar WhatsApp, podés usar FacturApp.",
  },
];

export default function FacturApp() {
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
            <div className={styles.heroBadge}>
              <span aria-hidden="true">📋</span> FacturApp
              <span className={styles.heroBadgeStatus}>En desarrollo</span>
            </div>
            <h1 className={styles.heroTitle}>
              Facturá sin <em className={styles.heroTitleEm}>complicaciones</em>
            </h1>
            <p className={styles.heroSubtitle}>
              Una aplicación simple, rápida e intuitiva para gestionar tus facturas y finanzas. Diseñada para
              emprendedores y pequeñas empresas que quieren ordenarse sin perder tiempo.
            </p>
            <div className={styles.heroActions}>
              <a
                href="https://wa.me/5491155236820?text=Hola!%20Me%20interesa%20FacturApp%2C%20%C2%BFcu%C3%A1ndo%20est%C3%A1%20disponible%3F"
                className={styles.heroCta}
                target="_blank"
                rel="noopener noreferrer"
              >
                Avisame cuando esté lista
              </a>
              <span className={styles.heroNote}>Respondemos por WhatsApp en menos de 24 h</span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className={styles.features}>
          <div className={styles.featuresContainer}>
            <header className={styles.sectionHeader}>
              <span className={styles.eyebrow}>Qué va a incluir</span>
              <h2 className={styles.sectionTitle}>
                Todo lo que necesitás, <em className={styles.sectionTitleEm}>nada que no</em>
              </h2>
              <p className={styles.sectionSubtitle}>
                FacturApp está pensada para que en 5 minutos ya estés facturando.
              </p>
            </header>

            <div className={styles.featuresGrid}>
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
          </div>
        </section>

        {/* Status */}
        <section className={styles.status}>
          <div className={styles.statusContainer}>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot} aria-hidden="true" />
              En desarrollo activo
            </div>
            <h2 className={styles.statusTitle}>Estamos construyéndola</h2>
            <p className={styles.statusDesc}>
              FacturApp está en desarrollo activo. Si querés ser de los primeros en usarla cuando salga, dejanos tu
              contacto y te avisamos antes que a nadie.
            </p>
            <a
              href="https://wa.me/5491155236820?text=Hola!%20Quiero%20ser%20de%20los%20primeros%20en%20usar%20FacturApp"
              className={styles.statusCta}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Quiero ser de los primeros
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

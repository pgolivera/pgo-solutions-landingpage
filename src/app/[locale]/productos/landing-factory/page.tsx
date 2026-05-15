import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("landingFactory");
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
  };
}

export default async function LandingFactory() {
  const t = await getTranslations("landingFactory");

  const FEATURES = [
    { icon: "✏️", titleKey: "feature1Title" as const, descKey: "feature1Desc" as const },
    { icon: "⚡", titleKey: "feature2Title" as const, descKey: "feature2Desc" as const },
    { icon: "📈", titleKey: "feature3Title" as const, descKey: "feature3Desc" as const },
  ];

  const CLIENTS = [
    {
      name: "Fletes Ferro",
      sectorKey: "fletrosFerroSector" as const,
      descKey: "fletrosFerroDesc" as const,
      image: "/images/cliente-fletes-ferro.png",
      href: "https://fletes-ferro.netlify.app/",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <Link href="/#productos" className={styles.backLink}>
              {t("backLink")}
            </Link>
            <div className={styles.heroBadge}>Landing Factory</div>
            <h1 className={styles.heroTitle}>
              {t.rich("heroTitle", {
                em: (chunks) => <em className={styles.heroTitleEm}>{chunks}</em>,
              })}
            </h1>
            <p className={styles.heroSubtitle}>{t("heroSubtitle")}</p>
            <Link href="/#contacto" className={styles.heroCta}>
              {t("heroCta")}
            </Link>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.featuresContainer}>
            {FEATURES.map((f) => (
              <div key={f.titleKey} className={styles.featureCard}>
                <span className={styles.featureIcon} aria-hidden="true">
                  {f.icon}
                </span>
                <h3 className={styles.featureTitle}>{t(f.titleKey)}</h3>
                <p className={styles.featureDesc}>{t(f.descKey)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.showcase}>
          <div className={styles.showcaseContainer}>
            <header className={styles.showcaseHeader}>
              <span className={styles.eyebrow}>{t("showcaseEyebrow")}</span>
              <h2 className={styles.showcaseTitle}>{t("showcaseTitle")}</h2>
              <p className={styles.showcaseSubtitle}>{t("showcaseSubtitle")}</p>
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
                      alt={t("siteAlt", { name: client.name })}
                      fill
                      className={styles.projectImage}
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className={styles.projectInfo}>
                    <div>
                      <span className={styles.projectSector}>{t(client.sectorKey)}</span>
                      <h3 className={styles.projectName}>{client.name}</h3>
                      <p className={styles.projectDesc}>{t(client.descKey)}</p>
                    </div>
                    <span className={styles.projectLink}>{t("viewSite")}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaContainer}>
            <h2 className={styles.ctaTitle}>{t("ctaTitle")}</h2>
            <p className={styles.ctaSubtitle}>{t("ctaSubtitle")}</p>
            <Link href="/#contacto" className={styles.ctaButton}>
              {t("ctaButton")}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

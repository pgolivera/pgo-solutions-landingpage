import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LinkedInLink, GitHubLink } from "@/components/ui/SocialLink";
import styles from "./page.module.css";

const SKILLS = [
  { labelKey: "frontendLabel", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"] },
  { labelKey: "backendLabel", items: ["Ruby on Rails", "AWS (S3, CloudFront)", "CI/CD", "GitHub Actions"] },
  { labelKey: "testingLabel", items: ["Vitest", "Jest", "Testing Library", "Cypress"] },
];

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("sobreMi");
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
  };
}

export default async function SobreMi() {
  const t = await getTranslations("sobreMi");
  const trajectory = t.raw("trajectory") as Array<{ year: string; title: string; description: string }>;

  return (
    <>
      <Header />
      <main>
        {/* Intro */}
        <section className={styles.intro}>
          <div className={styles.introContainer}>
            <Link href="/" className={styles.backLink}>
              {t("backLink")}
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
                  <LinkedInLink
                    href="https://www.linkedin.com/in/pablo-olivera/"
                    ariaLabel={t("linkedinLabel")}
                    className={styles.socialLink}
                  />
                  <GitHubLink
                    href="https://github.com/pgolivera"
                    ariaLabel={t("githubLabel")}
                    className={styles.socialLink}
                  />
                </div>
              </div>

              <div className={styles.introText}>
                <span className={styles.eyebrow}>{t("eyebrow")}</span>
                <h1 className={styles.introTitle}>
                  {t.rich("title", {
                    em: (chunks) => <em className={styles.introTitleEm}>{chunks}</em>,
                  })}
                </h1>
                <div className={styles.introBio}>
                  <p>{t("bio1")}</p>
                  <p>{t("bio2")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trajectory */}
        <section className={styles.trajectory}>
          <div className={styles.trajectoryContainer}>
            <header className={styles.sectionHeader}>
              <span className={styles.eyebrow}>{t("trajectoryEyebrow")}</span>
              <h2 className={styles.sectionTitle}>
                {t.rich("trajectoryTitle", {
                  em: (chunks) => <em className={styles.sectionTitleEm}>{chunks}</em>,
                })}
              </h2>
            </header>

            <div className={styles.timeline}>
              {trajectory.map((item, i) => (
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
              <span className={styles.eyebrow}>{t("skillsEyebrow")}</span>
              <h2 className={styles.sectionTitle}>{t("skillsTitle")}</h2>
            </header>

            <div className={styles.skillsGrid}>
              {SKILLS.map((group) => (
                <div key={group.labelKey} className={styles.skillGroup}>
                  <h3 className={styles.skillGroupLabel}>{t(group.labelKey as Parameters<typeof t>[0])}</h3>
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
            <h2 className={styles.ctaTitle}>{t("ctaTitle")}</h2>
            <p className={styles.ctaSubtitle}>{t("ctaSubtitle")}</p>
            <div className={styles.ctaButtons}>
              <Link href="/#contacto" className={styles.ctaPrimary}>
                {t("ctaPrimary")}
              </Link>
              <Link href="/#productos" className={styles.ctaSecondary}>
                {t("ctaSecondary")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

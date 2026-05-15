import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { LinkedInLink, GitHubLink } from "@/components/ui/SocialLink";
import styles from "./About.module.css";

const SKILLS = ["React / Next.js", "TypeScript", "React Native", "AWS & CI/CD", "Ruby on Rails", "B2B & Negocio"];

export default async function About() {
  const t = await getTranslations("about");

  return (
    <section className={styles.about} id="pablo">
      <div className={styles.container}>
        <div className={styles.photoCol}>
          <div className={styles.photoWrapper}>
            <div className={styles.photo}>
              <Image
                src="/images/pablo-olivera.png"
                alt="Pablo Olivera"
                width={200}
                height={200}
                className={styles.photoImg}
                priority
              />
            </div>
          </div>

          <div className={styles.links}>
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

        <div className={styles.textCol}>
          <span className={styles.eyebrow}>{t("eyebrow")}</span>
          <h2 className={styles.title}>
            {t.rich("title", {
              em: (chunks) => <em className={styles.titleEm}>{chunks}</em>,
            })}
          </h2>
          <div className={styles.bio}>
            <p>{t("bio1")}</p>
            <p>{t("bio2")}</p>
          </div>
          <div className={styles.skills}>
            {SKILLS.map((skill) => (
              <span key={skill} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

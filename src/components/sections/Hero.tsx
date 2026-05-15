import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import styles from "./Hero.module.css";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>{t("eyebrow")}</span>
          <h1 className={styles.title}>
            {t.rich("title", {
              em: (chunks) => <em className={styles.titleEm}>{chunks}</em>,
            })}
          </h1>
          <p className={styles.subtitle}>{t("subtitle")}</p>
          <div className={styles.cta}>
            <Link href="/#contacto" className={styles.ctaPrimary}>
              {t("ctaPrimary")}
            </Link>
            <Link href="/#productos" className={styles.ctaSecondary}>
              {t("ctaSecondary")}
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={`${styles.card} ${styles.cardGreen}`}>
            <span className={styles.cardIcon}>⚡</span>
            <p className={styles.cardName}>Landing Factory</p>
            <p className={styles.cardDesc}>{t("cardLandingFactory")}</p>
          </div>
          <div className={`${styles.card} ${styles.cardAmber}`}>
            <span className={styles.cardIcon}>📋</span>
            <p className={styles.cardName}>FacturApp</p>
            <p className={styles.cardDesc}>{t("cardFacturApp")}</p>
          </div>
          <div className={`${styles.card} ${styles.cardDark}`}>
            <span className={styles.cardIcon}>🤖</span>
            <p className={styles.cardName}>BotSeller</p>
            <p className={styles.cardDesc}>{t("cardBotSeller")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

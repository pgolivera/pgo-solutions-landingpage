"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const switchLocale = () => {
    const nextLocale = locale === "es" ? "en" : "es";
    router.replace(pathname, { locale: nextLocale });
  };

  const NAV_LINKS = [
    { href: "/#productos" as const, label: t("products") },
    { href: "/sobre-mi" as const, label: t("about") },
    { href: "/#contacto" as const, label: t("contact") },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoMark}>PGO</span>
          <span className={styles.logoDot}>·</span>
          <span className={styles.logoWord}>Solutions</span>
        </Link>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
          aria-expanded={isMenuOpen}
        >
          <span className={`${styles.menuIcon} ${isMenuOpen ? styles.menuIconOpen : ""}`} />
        </button>

        <nav
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
          role="navigation"
          aria-label={t("ariaLabel")}
        >
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className={styles.navLink} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
          <Link href="/#contacto" className={styles.ctaButton} onClick={closeMenu}>
            {t("startProject")}
          </Link>
          <button
            className={styles.localeSwitcher}
            onClick={switchLocale}
            aria-label={locale === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            {locale === "es" ? "EN" : "ES"}
          </button>
        </nav>
      </div>
    </header>
  );
}

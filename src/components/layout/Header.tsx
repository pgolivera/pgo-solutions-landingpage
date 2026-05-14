"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "#productos", label: "Productos" },
  { href: "#pablo", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoMark}>PGO</span>
          <span className={styles.logoDot}>·</span>
          <span className={styles.logoWord}>Solutions</span>
        </a>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          <span className={`${styles.menuIcon} ${isMenuOpen ? styles.menuIconOpen : ""}`} />
        </button>

        <nav
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
          role="navigation"
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className={styles.navLink} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#contacto" className={styles.ctaButton} onClick={closeMenu}>
            Empezar proyecto
          </a>
        </nav>
      </div>
    </header>
  );
}

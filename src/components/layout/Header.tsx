"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "/#productos", label: "Productos" },
  { href: "/sobre-mi", label: "Nosotros" },
  { href: "/#contacto", label: "Contacto" },
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
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoMark}>PGO</span>
          <span className={styles.logoDot}>·</span>
          <span className={styles.logoWord}>Solutions</span>
        </Link>

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
            <Link key={link.label} href={link.href} className={styles.navLink} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
          <Link href="/#contacto" className={styles.ctaButton} onClick={closeMenu}>
            Empezar proyecto
          </Link>
        </nav>
      </div>
    </header>
  );
}

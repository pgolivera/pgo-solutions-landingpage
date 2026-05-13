"use client";

import { useState } from "react";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "#hero", label: "Inicio" },
  { href: "#hero", label: "Productos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logo}>
          PGO Solutions
        </a>

        {/* Mobile menu button */}
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          <span className={`${styles.menuIcon} ${isMenuOpen ? styles.menuIconOpen : ""}`} />
        </button>

        {/* Navigation */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className={styles.navLink} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#contacto" className={styles.ctaButton} onClick={closeMenu}>
            Contáctanos
          </a>
        </nav>
      </div>
    </header>
  );
}

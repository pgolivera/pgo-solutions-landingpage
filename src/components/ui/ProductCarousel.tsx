"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import ProductSlide, { Product } from "./ProductSlide";
import styles from "./ProductCarousel.module.css";

const PRODUCTS: Product[] = [
  {
    id: "facturapp",
    name: "FacturApp",
    tag: "Facturacion · SaaS",
    description: "Facturacion mensual guiada para profesionales de salud mental. Proformas, historial y evolucion a CRM.",
    icon: "\u{1F4CB}",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: "landing-factory",
    name: "Landing Factory",
    tag: "AI · Web",
    description: "Landing pages para comercios sin presencia digital. Agente IA que adapta el template desde un cuestionario.",
    icon: "\u{1F680}",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    id: "botsellers",
    name: "BotSellers",
    tag: "WhatsApp · Ventas",
    description: "Bot para carnecerias y comercios. Gestion de pedidos y criterios de venta inteligente 24/7.",
    icon: "\u{1F916}",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
];

export default function ProductCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return;

    const scrollLeft = carouselRef.current.scrollLeft;
    const slideWidth = carouselRef.current.offsetWidth;
    const newIndex = Math.round(scrollLeft / slideWidth);

    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < PRODUCTS.length) {
      setActiveIndex(newIndex);
    }
  }, [activeIndex]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSlide = (index: number) => {
    if (!carouselRef.current) return;

    const slideWidth = carouselRef.current.offsetWidth;
    carouselRef.current.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel} ref={carouselRef}>
        {PRODUCTS.map((product) => (
          <ProductSlide key={product.id} product={product} />
        ))}
      </div>

      {/* Dot indicators */}
      <div className={styles.dots}>
        {PRODUCTS.map((product, index) => (
          <button
            key={product.id}
            className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
            onClick={() => scrollToSlide(index)}
            aria-label={`Ver ${product.name}`}
          />
        ))}
      </div>
    </div>
  );
}

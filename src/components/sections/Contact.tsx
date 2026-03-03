import styles from "./Contact.module.css";

const CONTACT_METHODS = [
  {
    icon: "\u{1F4E7}",
    label: "Email",
    value: "contacto@pgosolutions.com",
    href: "mailto:contacto@pgosolutions.com",
  },
  {
    icon: "\u{1F4F1}",
    label: "WhatsApp",
    value: "+54 9 11 1234-5678",
    href: "https://wa.me/5491112345678",
  },
  {
    icon: "\u{1F4CD}",
    label: "Ubicacion",
    value: "Buenos Aires, Argentina",
    href: null,
  },
];

export default function Contact() {
  return (
    <section className={styles.contact} id="contacto">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Contactanos</h2>
          <p className={styles.subtitle}>
            Estamos listos para ayudarte a llevar tu negocio al siguiente nivel.
            Escribenos y te responderemos a la brevedad.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.methods}>
            {CONTACT_METHODS.map((method) => (
              <div key={method.label} className={styles.method}>
                <span className={styles.methodIcon}>{method.icon}</span>
                <div className={styles.methodInfo}>
                  <span className={styles.methodLabel}>{method.label}</span>
                  {method.href ? (
                    <a href={method.href} className={styles.methodValue}>
                      {method.value}
                    </a>
                  ) : (
                    <span className={styles.methodValueText}>{method.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cta}>
            <p className={styles.ctaText}>
              Prefiere hablar directamente?
            </p>
            <a
              href="https://wa.me/5491112345678?text=Hola!%20Me%20interesa%20conocer%20mas%20sobre%20sus%20productos"
              className={styles.whatsappButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Iniciar chat en WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

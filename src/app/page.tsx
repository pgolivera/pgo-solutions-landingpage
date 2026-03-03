import { SITE_CONFIG } from "@/constants";

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: 'var(--spacing-xl)',
      textAlign: 'center'
    }}>
      <header>
        <h1 style={{ fontSize: 'var(--font-size-5xl)', marginBottom: 'var(--spacing-md)' }}>
          {SITE_CONFIG.name}
        </h1>
        <p style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-secondary)', maxWidth: '600px' }}>
          {SITE_CONFIG.description}
        </p>
      </header>

      <section style={{ marginTop: 'var(--spacing-2xl)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-lg)',
          maxWidth: '1000px'
        }}>
          <FeatureCard
            title="SEO Nativo"
            description="Optimizado con Next.js Metadata API para máxima visibilidad en buscadores."
          />
          <FeatureCard
            title="Robustez"
            description="TypeScript, Vitest y Playwright configurados para garantizar calidad total."
          />
          <FeatureCard
            title="Ligereza"
            description="Sin librerías pesadas innecesarias. Rendimiento Core Web Vitals en mente."
          />
        </div>
      </section>

      <footer style={{ marginTop: 'var(--spacing-3xl)', color: 'var(--color-text-muted)' }}>
        <p>© {new Date().getFullYear()} PGO Solutions. Built for speed.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div style={{
      padding: 'var(--spacing-lg)',
      backgroundColor: 'var(--color-bg-secondary)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--color-bg-overlay)'
    }}>
      <h3 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--color-accent)' }}>{title}</h3>
      <p style={{ fontSize: 'var(--font-size-sm)' }}>{description}</p>
    </div>
  );
}

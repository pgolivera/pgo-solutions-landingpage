import styles from "./ProductSlide.module.css";

export interface Product {
  id: string;
  name: string;
  tag: string;
  description: string;
  icon: string;
  gradient: string;
}

interface ProductSlideProps {
  product: Product;
}

export default function ProductSlide({ product }: ProductSlideProps) {
  return (
    <div className={styles.slide}>
      <div
        className={styles.content}
        style={{ background: product.gradient }}
      >
        <div className={styles.iconWrapper}>
          <span className={styles.icon}>{product.icon}</span>
        </div>
        <h3 className={styles.name}>{product.name}</h3>
        <span className={styles.tag}>{product.tag}</span>
        <p className={styles.description}>{product.description}</p>
      </div>
    </div>
  );
}

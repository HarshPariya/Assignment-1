import styles from '../styles/home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Welcome to My Assignment</h1>
        <p className={styles.subtitle}>
          We build modern, scalable, and professional digital solutions with Next.js, dynamic routing, and theme toggling.
        </p>
        <div className={styles.cta}>
          <Link href="/about" className={styles.btnSecondary}>
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}

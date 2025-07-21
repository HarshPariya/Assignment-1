import styles from '../styles/about.module.css';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.subtitle}>
        We are a passionate team of developers, designers, and strategists
        dedicated to building high-quality, scalable, and modern digital
        solutions.
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h2>Our Mission</h2>
          <p>
            To empower businesses with innovative digital solutions that enhance
            productivity, reach, and growth.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Our Values</h2>
          <p>
            We prioritize transparency, collaboration, and delivering
            world-class products that exceed client expectations.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Our Expertise</h2>
          <p>
            We specialize in web development, SEO, consulting, and creating
            tailored solutions for startups and enterprises.
          </p>
        </div>
      </div>
    </div>
  );
}

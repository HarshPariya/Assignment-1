import Link from "next/link";

export default function Services() {
  return (
    <div className={styles["page-container"]}>
      <h1 className={styles["page-title"]}>Our Services</h1>
      <p className={styles["page-subtitle"]}>
        Explore our premium services designed to help your business grow.
      </p>

      <div className={styles["cards-grid"]}>
        <Link href="/services/web-development" className={styles.card}>
          <div className={`${styles["icon-wrapper"]} ${styles["icon-mern"]}`}>
            <FaReact size={40} />
          </div>
          <h2>Web Development</h2>
          <p>Modern web apps using MERN, MEAN, and .NET stacks.</p>
        </Link>

        <Link href="/services/seo" className={styles.card}>
          <div className={`${styles["icon-wrapper"]} ${styles["icon-seo"]}`}>
            <FaSearch size={40} />
          </div>
          <h2>SEO Optimization</h2>
          <p>Boost your online presence and search engine rankings.</p>
        </Link>

        <Link href="/services/consulting" className={styles.card}>
          <div className={`${styles["icon-wrapper"]} ${styles["icon-consulting"]}`}>
            <FaUserTie size={40} />
          </div>
          <h2>Consulting</h2>
          <p>Expert advice to drive growth and success.</p>
        </Link>
      </div>
    </div>
  );
}

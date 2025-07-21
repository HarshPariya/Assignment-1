import Link from "next/link";
import styles from "../../../styles/services.module.css";

export default function WebDevelopment() {
  return (
    <div className={styles["services-container"]}>
      <h1>Web Development Services</h1>
      <p>
        Choose the technology stack that suits your project requirements. Our
        team specializes in building scalable and modern web applications.
      </p>

      <div className={styles["services-grid"]}>
        <div className={styles["service-card"]}>
          <Link href="/services/web-development/mern">MERN Stack</Link>
        </div>
        <div className={styles["service-card"]}>
          <Link href="/services/web-development/mean">MEAN Stack</Link>
        </div>
        <div className={styles["service-card"]}>
          <Link href="/services/web-development/dotnet">.NET Development</Link>
        </div>
      </div>
    </div>
  );
}

import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../../styles/services.module.css";

export default function StackPage() {
  const router = useRouter();
  const { stack } = router.query;

  const stackName = stack?.toUpperCase();

  return (
    <div className={styles["services-container"]}>
      <h1>{stackName} Development</h1>
      <p>
        We provide expert {stackName} development services tailored to your
        needs.
      </p>
      <Link href="/services/web-development" className={styles["service-card"]}>
        ← Back to Web Development
      </Link>
    </div>
  );
}

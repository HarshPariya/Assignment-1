import styles from '../styles/contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.subtitle}>
        Have a question or need help? Reach out to us and we'll get back to you shortly.
      </p>

      <div className={styles.contactFormWrapper}>
        <form className={styles.contactForm}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>
      </div>

      <p className={styles.emailInfo}>
        Or email us directly at <a href="mailto:hpariya195@.com">hpariya195@gmail.com</a>
      </p>
    </div>
  );
}

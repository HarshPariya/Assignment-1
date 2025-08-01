import Link from 'next/link';
import { useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-container']}>
        <Link href="/" className={styles.logo}>Assignment-1</Link>

        <div className={`${styles.menu} ${isMobile ? styles.active : ''}`}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>

          <div
            className={styles.submenu}
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <span>Services ▾</span>
            {showServices && (
              <div className={styles.dropdown}>
                <Link href="/services/web-development">Web Development</Link>
                <Link href="/services/seo">SEO</Link>
                <Link href="/services/consulting">Consulting</Link>
              </div>
            )}
          </div>

          <Link href="/contact">Contact</Link>
        </div>

        <div className={styles['nav-actions']}>
          <button className={styles['theme-toggle']} onClick={toggleTheme}>
            Toggle Theme
          </button>
          <button
            className={styles.hamburger}
            onClick={() => setIsMobile(!isMobile)}
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
        <footer className={styles.footer}>
          <p className={styles.p}>&copy; 2024 My Next.js Website. All rights reserved.</p>
        </footer>
    </div>
  )
}
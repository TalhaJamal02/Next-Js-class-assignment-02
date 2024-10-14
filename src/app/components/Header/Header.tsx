import styles from './Header.module.css'

export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <h2>Logo</h2>
          <ul className={styles.ul}>
            <li className={styles.li}>Home</li>
            <li className={styles.li}>About</li>
            <li className={styles.li}>Services</li>
            <li className={styles.li}>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
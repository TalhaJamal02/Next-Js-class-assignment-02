import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Welcome to <span className={styles.span}> My Website</span></h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab nemo laboriosam amet unde et?</p>
        <button className={styles.btn}>Get Started</button>
      </div>
    </div>
  )
}
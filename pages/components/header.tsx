import styles from '../../styles/Home.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>オンレコ</a>
      <a className={`${styles.logo} ${styles.new}`}>投稿する</a>
    </header>
  )
}
import Head from 'next/head'

import styles from '../../styles/Home.module.css'
import { IsNew } from '../../unify/const'

export default function Header(props: IsNew) {
  return (
    <div>
      <Head>
        <title>オンレコ</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <header className={styles.header}>
        <a href="/" className={styles.logo}>オンレコ</a>
        <a className={`${styles.logo} ${styles.new}`} onClick={() => { props.isNew ? props.setIsNew(false) : props.setIsNew(true); }}>投稿フォーム</a>
      </header>
    </div>
  )
}
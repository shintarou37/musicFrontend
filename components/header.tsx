import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Header.module.css'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
const cookies = parseCookies()
console.log( cookies.token )

export default function Header() {
  return (
    <div>
      <Head>
        <title>オンレコ</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.logo}>オンレコ</a>
        </Link>
        {!cookies.token &&
        <div>
          <Link href="/users/signup">
            <a className={styles.rightLogo}>新規登録</a>
          </Link>
          <Link href="/signin">
            <a className={styles.rightLogo}>ログイン</a>
          </Link>
        </div>
        }
      </header>
    </div>
  )
}
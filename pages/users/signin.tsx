import styles from '../../styles/Home.module.css'
import Header from '../../components/header'
import SignInForm from '../../components/users/signinForm'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

export default function Form() {
  // Cookieを削除する
  destroyCookie(null, 'token');
  destroyCookie(null, 'name');
  destroyCookie(null, 'id');
  return (
    <div className={styles.container}>
      <Header />
      <SignInForm />
    </div>
  )
}
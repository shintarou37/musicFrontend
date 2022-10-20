import styles from '../../styles/Home.module.css'
import Header from '../../components/header'
import SignUpForm from '../../components/users/signupForm'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

export default function Form() {
  // Cookieを削除する
  destroyCookie(null, 'token');
  destroyCookie(null, 'name');
  destroyCookie(null, 'id');

  return (
    <div className={styles.container}>
      <Header />
      <SignUpForm />
    </div>
  )
}
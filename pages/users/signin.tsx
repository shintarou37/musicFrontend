import styles from '../../styles/Home.module.css'
import Header from '../../components/header'
import SignInForm from '../../components/users/signinForm'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

export default function Form() {
  destroyCookie(null, 'token')
  destroyCookie(null, 'name')
    return (
      <div className={styles.container}>
        <Header/>
        <SignInForm/>
      </div>
    )
}
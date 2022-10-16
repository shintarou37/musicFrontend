import styles from '../../styles/Home.module.css'
import Header from '../../components/header'
import SignInForm from '../../components/users/signinForm'

export default function Form() {
    return (
      <div className={styles.container}>
        <Header/>
        <SignInForm/>
      </div>
    )
}
import styles from '../../styles/Home.module.css'
import Header from '../../components/header'
import SignUpForm from '../../components/users/signupForm'

export default function Form() {
    return (
      <div className={styles.container}>
        <Header/>
        <SignUpForm/>
      </div>
    )
}
import { FC } from 'react'
import loginImg from '../../assets/login.png'
import logo from '../../assets/logo.svg'
import styles from './auth.module.scss'
import LoginForm from './components/LoginForm/LoginForm'
import RegisterForm from './components/RegisterForm/RegisterForm'

const Auth: FC<{href: string}> = ({href}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.form}>
          <img className={styles.logo} src={logo} alt="logo" />
          { href === 'login' && <LoginForm /> }
          { href === 'register' && <RegisterForm /> }
        </div>
        <img className={styles.img} src={loginImg} alt="loginImg" />
      </div>
    </div>
  )
}

export default Auth
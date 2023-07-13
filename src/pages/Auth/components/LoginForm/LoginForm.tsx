import { FC, useRef, useState, ChangeEvent, MouseEvent } from 'react'
// import { FiCheck } from "react-icons/fi"
import { userStore } from '../../../../stores'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import styles from '../form.module.scss'

interface ILoggingUser {
  email: string,
  password: string
}

const LoginForm: FC = () => {

  const remember = useRef<HTMLInputElement>(null)

  // const navigate = useNavigate()

  const [user, setUser] = useRecoilState(userStore)

  const [loggingUser, setLoggingUser] = useState<ILoggingUser>({
    email: '',
    password: ''
  })

  const login = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const userData = {
      firstName: '',
      lastName: '',
      email: loggingUser.email,
      phone: ''
    }
    localStorage.setItem('user', JSON.stringify(userData))
    setUser({...userData})
    //! Replace with navigate from react router
    window.location.pathname = '/'
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Welcome back</h1>
      <h2 className={styles.subtitle}>Welcome back! Please enter your details</h2>
      <div className={styles.form}>
        <label className={styles.form__label}>Email</label>
        <input 
          className={styles.form__input}
          type="email"
          value={loggingUser.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setLoggingUser({...loggingUser, email: e.target.value})}
         />
      </div>
      <div className={styles.form}>
        <label className={styles.form__label}>Password</label>
        <input 
          className={styles.form__input}
          type="password"
          value={loggingUser.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setLoggingUser({...loggingUser, password: e.target.value})}
         />
      </div>
      <div className={styles.actions}>
        <div className={styles.remember}>
          <label className={styles.checkbox} htmlFor="remember">
            
          </label>
          <input ref={remember} id="remember" type="checkbox" />
          <span>Remember for 30 Days</span>
        </div>
        <a href="#">Forgot password</a>
      </div>
      <button onClick={(e: MouseEvent<HTMLButtonElement>) => login(e)} className={styles.btn}>Sign In</button>
      <p className={styles.redirect}>
        Does not have account? <a href="register">Sign up now!</a>
      </p>
    </div>
  )
}

export default LoginForm
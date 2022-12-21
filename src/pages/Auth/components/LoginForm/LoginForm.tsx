import { FC, useRef, useState, ChangeEvent } from 'react';
import { FiCheck } from "react-icons/fi"
import styles from '../form.module.scss'

interface ILoggingUser {
  email: string,
  password: string
}

const LoginForm: FC = () => {

  const remember = useRef<HTMLInputElement>(null)

  const [loggingUser, setLoggingUser] = useState<ILoggingUser>({
    email: '',
    password: ''
  })

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Welcome back</h1>
      <h2 className={styles.subtitle}>Welcome back! Please enter your details</h2>
      <div className={styles.form}>
        <label className={styles.form__label}>Email</label>
        <input 
          className={styles.form__input}
          placeholder="Enter your email"
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
      <button className={styles.btn}>Sign In</button>
    </div>
  )
}

export default LoginForm
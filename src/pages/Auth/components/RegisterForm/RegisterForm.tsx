import { ChangeEvent, FC, useRef, useState } from 'react';
import styles from '../form.module.scss'

interface ICreatingUser {
  fullName: string,
  email: string,
  password: string,
}

const RegisterForm: FC = () => {

  const remember = useRef<HTMLInputElement>(null)

  const [creatingUser, setCreatingUser] = useState<ICreatingUser>({
    fullName: '',
    email: '',
    password: ''
  })

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Create new account</h1>
      <h2 className={styles.subtitle}>Register now and start using Maglo!</h2>
      <div className={styles.form}>
        <label className={styles.form__label}>Full Name</label>
        <input 
          className={styles.form__input}
          type="text"
          value={creatingUser.fullName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCreatingUser({...creatingUser, fullName: e.target.value})}
         />
      </div>
      <div className={styles.form}>
        <label className={styles.form__label}>Email</label>
        <input 
          className={styles.form__input}
          type="email"
          value={creatingUser.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCreatingUser({...creatingUser, email: e.target.value})}
         />
      </div>
      <div className={styles.form}>
        <label className={styles.form__label}>Password</label>
        <input 
          className={styles.form__input}
          type="password"
          value={creatingUser.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCreatingUser({...creatingUser, password: e.target.value})}
         />
      </div>
      <button className={styles.btn}>Create Account</button>
    </div>
  )
}

export default RegisterForm
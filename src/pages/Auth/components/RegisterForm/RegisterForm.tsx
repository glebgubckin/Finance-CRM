import { ChangeEvent, FC, MouseEvent, useState } from 'react';
import { useRecoilState } from 'recoil'
import { userStore } from '../../../../stores'
import styles from '../form.module.scss'

interface ICreatingUser {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}

const RegisterForm: FC = () => {

  // const remember = useRef<HTMLInputElement>(null)

  const [user, setUser] = useRecoilState(userStore)

  const [creatingUser, setCreatingUser] = useState<ICreatingUser>({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const register = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const userData = {
      firstName: creatingUser.firstName,
      lastName: creatingUser.lastName,
      email: creatingUser.email,
      phone: ''
    }
    localStorage.setItem('user', JSON.stringify(userData))
    setUser({...userData})
    //! Replace with navigate from react router
    window.location.pathname = '/'
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Create new account</h1>
      <h2 className={styles.subtitle}>Register now and start using Maglo!</h2>
      <div className={styles.form}>
        <label className={styles.form__label}>First Name</label>
        <input 
          className={styles.form__input}
          type="text"
          value={creatingUser.firstName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCreatingUser({...creatingUser, firstName: e.target.value})}
         />
      </div>
      <div className={styles.form}>
        <label className={styles.form__label}>Last Name</label>
        <input 
          className={styles.form__input}
          type="text"
          value={creatingUser.lastName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCreatingUser({...creatingUser, lastName: e.target.value})}
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
      <button onClick={(e: MouseEvent<HTMLButtonElement>) => register(e)} className={styles.btn}>Create Account</button>
      <p className={styles.redirect}>
        Already has account? <a href="login">Sign in now!</a>
      </p>
    </div>
  )
}

export default RegisterForm
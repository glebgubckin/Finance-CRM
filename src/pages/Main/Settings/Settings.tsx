import { FC, MouseEvent, useEffect, useState } from 'react'
import { FiEdit3 } from 'react-icons/fi'
import Input from './components/Input/Input'
import { useRecoilState } from 'recoil'
import { appStore } from '../../../stores/appStore'
import { userStore } from '../../../stores/userStore'
import { setTitle, updateProfile, updateValidate } from '../../../utils/index'
import styles from './settings.module.scss'

export interface Form {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  newPassword: string,
  confirmNewPassword: string
}

const Settings: FC = () => {

  setTitle('Settings')
  const [appState, setAppState] = useRecoilState(appStore)
  const [userState, setUserState] = useRecoilState(userStore)

  const [edit, setEdit] = useState(false)

  const [form, setForm] = useState<Form>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    newPassword: '',
    confirmNewPassword: ''
  })

  const update = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    updateProfile(form)
    setUserState({...form})
    setForm({...form, newPassword: '', confirmNewPassword: ''})
    setEdit(false)
  }
  
  useEffect(() => {
    setAppState({...appState, navTitle: `Settings`})
    setForm({...userState, newPassword: '', confirmNewPassword: ''})
  }, [])

  return (
    <div className={styles.wrapper}>
      <h1>Account Information</h1>
      <p className={styles.subtitle}>Update your account information</p>
      <div className={styles.controls}>
        <h2>Personal Information</h2>
        <button 
          className={styles.edit}
          onClick={() => setEdit(!edit)}
        >
          <FiEdit3 size={24} color='29A073' />
          Edit
        </button>
      </div>
        <form className={styles.form}>
          <Input
            type="text"
            disabled={!edit}
            label='First Name'
            value={form.firstName}
            formData={form}
            field='firstName'
            setValue={setForm}
          />
          <Input
            type="text"
            disabled={!edit}
            label='Last Name'
            value={form.lastName}
            formData={form}
            field='lastName'
            setValue={setForm}
          />
          <Input
            type="email"
            disabled={!edit}
            label='Email'
            value={form.email}
            formData={form}
            field='email'
            setValue={setForm}
          />
          <Input
            type="phone"
            disabled={!edit}
            label='Phone'
            value={form.phone}
            formData={form}
            field='phone'
            setValue={setForm}
          />
          <Input
            type="password"
            disabled={!edit}
            label='New Password'
            value={form.newPassword}
            formData={form}
            field='newPassword'
            setValue={setForm}
          />
          <Input
            type="password"
            disabled={!edit}
            label='Confirm Password'
            value={form.confirmNewPassword}
            formData={form}
            field='confirmNewPassword'
            setValue={setForm}
          />
        </form>
        { edit && <button disabled={updateValidate(form.newPassword, form.confirmNewPassword)} onClick={(e: MouseEvent<HTMLButtonElement>) => update(e)} className={styles.update}>Update</button> }
    </div>
  )
}

export default Settings
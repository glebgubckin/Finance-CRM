import { ChangeEvent, Dispatch, FC, InputHTMLAttributes, MouseEvent, SetStateAction, useState } from 'react';
import { Form } from '../../Settings'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import styles from './input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  value: string,
  field: string,
  formData: Form,
  setValue: Dispatch<SetStateAction<Form>>
}

const Input: FC<InputProps> = ({label, value, field, formData, setValue, ...props}) => {

  const [show, setShow] = useState(false)
  const [type, setType] = useState(props.type)

  const changeShow = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setShow(!show)
    if (type === 'password') {
      setType("text")
    } else {
      setType("password")
    }
  }

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <div className={styles.row}>
        <input {...props} type={type} className={styles.input}  value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue({...formData, [field]: e.target.value})} />
        {
          (field === 'newPassword' || field === 'confirmNewPassword')
          && show
          && <button 
                className={styles.passBtn}
                onClick={(e: MouseEvent<HTMLButtonElement>) => changeShow(e)}
              >
              <FiEyeOff size={20} color='A2A2A8' />
            </button>
        }
        {
          (field === 'newPassword' || field === 'confirmNewPassword')
          && !show
          && <button 
                className={styles.passBtn}
                onClick={(e: MouseEvent<HTMLButtonElement>) => changeShow(e)}
              >
              <FiEye size={20} color='A2A2A8' />
            </button>
        }
      </div>
    </div>
  )
}

export default Input
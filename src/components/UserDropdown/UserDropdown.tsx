import { FC } from 'react'
import user from '../../assets/user.png'
import { FiChevronDown } from "react-icons/fi"
import styles from './userDropdown.module.scss'

const UserDropdown: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <img src={user} alt="user" width={36} height={36} />
        <span>David McLaren</span>
        <button className={styles.drop}>
          <FiChevronDown color='1B212D' size={20} />
        </button>
      </div>
    </div>
  )
}

export default UserDropdown
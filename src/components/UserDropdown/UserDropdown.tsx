import { FC, useState } from 'react';
import userImg from '../../assets/user.png'
import { FiChevronDown } from "react-icons/fi"
import styles from './userDropdown.module.scss'
import { useRecoilState } from 'recoil';
import { userStore } from '../../stores/'

const UserDropdown: FC = () => {

  const [user] = useRecoilState(userStore)
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.wrapper}>
      <div onClick={() => setOpen(!open)} className={styles.top}>
        <img src={userImg} alt="user" width={36} height={36} />
        <span>{`${user.firstName} ${user.lastName}`}</span>
        <button className={open ? `${styles.drop} ${styles.drop__active}` : styles.drop}>
          <FiChevronDown color='1B212D' size={20} />
        </button>
      </div>
      <div className={open ? `${styles.bottom} ${styles.bottom__show}` : `${styles.bottom} ${styles.bottom__hide}`}>
        <button className={styles.switch}>Switch account</button>
      </div>
    </div>
  )
}

export default UserDropdown
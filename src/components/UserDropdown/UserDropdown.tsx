import { FC } from 'react'
import userImg from '../../assets/user.png'
import { FiChevronDown } from "react-icons/fi"
import styles from './userDropdown.module.scss'
import { useRecoilState } from 'recoil';
import { userStore } from '../../stores/userStore';

const UserDropdown: FC = () => {

  const [user, setUser] = useRecoilState(userStore)

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <img src={userImg} alt="user" width={36} height={36} />
        <span>{`${user.firstName} ${user.lastName}`}</span>
        <button className={styles.drop}>
          <FiChevronDown color='1B212D' size={20} />
        </button>
      </div>
    </div>
  )
}

export default UserDropdown
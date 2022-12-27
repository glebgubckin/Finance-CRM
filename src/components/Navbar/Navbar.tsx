import { FC } from 'react'
import { useRecoilState } from 'recoil'
import { appStore } from '../../stores'
import { FiBell } from "react-icons/fi";
import styles from './navbar.module.scss'
import UserDropdown from '../UserDropdown/UserDropdown';

const Navbar: FC = () => {

  const [appState, setAppState] = useRecoilState(appStore)

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{appState.navTitle}</h1>
      <div className={styles.controls}>
        <div className={styles.notifications}>
          <button className={styles.icon}>
            <FiBell color='929EAE' size={24} />
          </button>
          <div 
            className={appState.notificationsCount > 0 ? styles.count : ''}
          >
            { appState.notificationsCount > 0 ? appState.notificationsCount : null }
          </div>
        </div>
        <UserDropdown />
      </div>
    </div>
  )
}

export default Navbar
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import logo2 from '../../assets/logo2.svg'
import { FiHome, FiTrendingUp, FiBookmark, FiSettings } from "react-icons/fi"
import { BsWallet2 } from 'react-icons/bs'
import styles from './sidebar.module.scss'

const Sidebar: FC = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.desktop}><img src={logo} alt="logo" /></span>
      <span className={styles.mobile}><img src={logo2} alt="logo" /></span>
      <nav className={styles.nav}>
        <NavLink 
          className={({isActive}) => isActive ? `${styles.link} ${styles.link__active}` : styles.link} 
          to="/"
        >
          <FiHome size={20} />
          <span className={styles.nav__mobile}>Dashboard</span>
        </NavLink>
        <NavLink 
          className={({isActive}) => isActive ? `${styles.link} ${styles.link__active}` : styles.link} 
          to="/transactions"
        >
          <FiTrendingUp size={20} />
          <span className={styles.nav__mobile}>Transactions</span>
        </NavLink>
        <NavLink 
          className={({isActive}) => isActive ? `${styles.link} ${styles.link__active}` : styles.link} 
          to="/invoices"
        >
          <FiBookmark size={20} />
          <span className={styles.nav__mobile}>Invoices</span>
        </NavLink>
        <NavLink 
          className={({isActive}) => isActive ? `${styles.link} ${styles.link__active}` : styles.link} 
          to="/wallets"
        >
          <BsWallet2 size={20} />
          <span className={styles.nav__mobile}>My Wallets</span>
        </NavLink>
        <NavLink 
          className={({isActive}) => isActive ? `${styles.link} ${styles.link__active}` : styles.link} 
          to="/settings"
        >
          <FiSettings size={20} />
          <span className={styles.nav__mobile}>Settings</span>
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar
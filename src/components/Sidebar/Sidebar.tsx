import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { FiHome, FiTrendingUp, FiBookmark, FiSettings } from "react-icons/fi"
import { BsWallet2 } from 'react-icons/bs';
import styles from './sidebar.module.scss'

const Sidebar: FC = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="logo" />
      <nav className={styles.nav}>
        <NavLink 
          className={({isActive}) => isActive ? `${styles.link} ${styles.link__active}` : styles.link} 
          to="/"
        >
          <FiHome size={20} />
          Dashboard
        </NavLink>
        <NavLink 
          className={({isActive}) => isActive ? `${styles.link} ${styles.link__active}` : styles.link} 
          to="/transactions"
        >
          <FiTrendingUp size={20} />
          Transactions
        </NavLink>
        <NavLink 
          className={({isActive}) => isActive ? `${styles.link} ${styles.link__active}` : styles.link} 
          to="/invoices"
        >
          <FiBookmark size={20} />
          Invoices
        </NavLink>
        <NavLink 
          className={({isActive}) => isActive ? `${styles.link} ${styles.link__active}` : styles.link} 
          to="/wallets"
        >
          <BsWallet2 size={20} />
          My Wallets
        </NavLink>
        <NavLink 
          className={({isActive}) => isActive ? `${styles.link} ${styles.link__active}` : styles.link} 
          to="/settings"
        >
          <FiSettings size={20} />
          Settings
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar
import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import styles from './mainLayout.module.scss'

const MainLayout: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.page}>
        <Navbar />
      </div>
    </div>
  )
}

export default MainLayout
import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import styles from './mainLayout.module.scss'

const MainLayout: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
    </div>
  )
}

export default MainLayout
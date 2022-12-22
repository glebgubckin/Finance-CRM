import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import { pages } from '../pages/Main'
import styles from './mainLayout.module.scss'

const MainLayout: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.page}>
        <Navbar />
        <Routes>
          {
            pages.map(page => <Route key={page.id} path={page.path} element={<page.element />} />)
          }
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  )
}

export default MainLayout
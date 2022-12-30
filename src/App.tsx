import { FC } from 'react'
import jwt from 'jsonwebtoken'
import { BrowserRouter as Router } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'

const token: string | null = localStorage.getItem('user')
let isAuth: boolean = token ? true : false

const App: FC = () => {


  return (
    <Router>
      { isAuth && <MainLayout /> }
      { !isAuth && <AuthLayout /> }
    </Router>
  )
}

export default App
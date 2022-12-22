import { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'

const App: FC = () => {

  const isAuth = true

  return (
    <Router>
      { isAuth && <MainLayout /> }
      { !isAuth && <AuthLayout /> }
    </Router>
  )
}

export default App
import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Auth from '../pages/Auth/Auth'

const AuthLayout: FC = () => {
  return (
    <Routes>
      <Route path='/login' element={<Auth href='login' />} />
      <Route path='/register' element={<Auth href='register' />} />
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  )
}

export default AuthLayout
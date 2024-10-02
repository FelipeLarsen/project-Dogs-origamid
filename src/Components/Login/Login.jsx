import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreateUser from './LoginCreateUser'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'
import { UserContext } from '../../UserContext'
import styles from './Login.module.css'

const Login = () => {
  const { login } = React.useContext(UserContext)

  if (login === true) return <Navigate to="/my_account" />

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create_user" element={<LoginCreateUser />} />
          <Route path="lost_password" element={<LoginPasswordLost />} />
          <Route path="password_reset" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login
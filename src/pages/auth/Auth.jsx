import React from 'react'
import Header from '../../components/header/Header'
import AuthForm from '../../components/authForm/AuthForm'

import './auth.css'

const Auth = () => (
  <div className="auth">
    <Header />
    <div className="auth__content">
      <AuthForm />
    </div>
  </div>
)

export default Auth

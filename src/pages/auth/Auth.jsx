import React from 'react'
import Fade from 'react-reveal/Fade'
import Header from '../../components/header/Header'
import AuthForm from '../../components/authForm/AuthForm'

import './auth.css'

const Auth = () => (
  <div className="auth">
    <Fade bottom>
      <Header />
    </Fade>
    <div className="auth__content">
      <AuthForm />
    </div>
  </div>
)

export default Auth

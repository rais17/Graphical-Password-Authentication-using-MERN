import React from 'react'
import Template from '../Components/Template'
import loginImg from '../assets/login3.jpg'

const Login = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn
  return (
    <Template
      image={loginImg}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login

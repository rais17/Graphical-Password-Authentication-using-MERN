import React from 'react'
import Template from '../Components/Template'
import signupImg from "../assets/login2.jpg";

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup

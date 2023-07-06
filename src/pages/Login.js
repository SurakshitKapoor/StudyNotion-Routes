import React from 'react'
import loginImg from '../assets/login.png';
import Template from '../components/Template';
// import LoginForm from '../components/LoginForm';

 const Login = ({setIsloggedIn}) => {
  return (
    <div>
      {/* Login Here
      <LoginForm/>  - for debugging the program*/}
      <Template
      title = "Welcome Back"
      desc1 = "Build skills for today, tomorrow and beyond"
      desc2 = "Education to future-proof your career"
      image = {loginImg}
      formType = "login"
      setIsloggedIn = {setIsloggedIn}
      />
    </div>
  )
}
export default Login;

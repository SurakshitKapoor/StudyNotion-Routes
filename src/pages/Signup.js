import React from 'react';
import signupImg from '../assets/signup.png';
import { Template } from '../components/Template';

 const Signup = ({setIsloggedIn}) => {
  return (
    <div>
      Signup Here
      <Template
      title = "Join the millions learning to code with StudyNotion for free"
      desc1 = "Build skills for today, tomorrow and beyond"
      desc2 = "Education to future-proof your career"
      image = {signupImg}
      formType = "signup"
      setIsloggedIn = {setIsloggedIn}
      />
    </div>
  )
}
export default Signup;
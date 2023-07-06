import React, { useState } from 'react';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

 const LoginForm = ({setIsloggedIn}) => {

    const navigate = useNavigate();
    const[formData, setFormData] = useState({
        email:"", password:""
    })

    const[showPassword, setShowPassword] = useState(false);
    
    function onChangeHandler(event){

      // if [] used for object destructuring, then error that object is not iterable. use - {} for object destructuring and [] for array destructuring
        let {name,value} = event.target;
      //event.target -> gives the HTML elem on which event applied

        setFormData((prev) => ({...prev, 
            [name] : value}));
    }
    
    // instead of calling setShowPassword directly onClick, use it seperately , to avoid too many renders loops
    function show(){
      setShowPassword(
        (prev) => (
            !prev
        )
      )
    }

    function submitHandler(event){
      event.preventDefault();
      setIsloggedIn(true);
      toast.success("Logged In Successfully");
      console.log("Printing the formData in login");
      console.log(formData);
      navigate("/dashboard");

    }

  return (
    <div>
      <form onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6">

        {/* label mein hi input field likh di; can also use label-for */}
        <label className='w-full'>
          
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Email Address <sup className='text-pink-200'>*</sup></p>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            placeholder="surakshit@abc.com"
            onChange={onChangeHandler}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
          />
        </label>

        <label className='relative w-full'>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'> 
          Password <sup className='text-pink-200' > *</sup></p>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={formData.password}
            placeholder="Enter Password"
            onChange={onChangeHandler}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
          />

          {/* for icons of visible / invisible */}
          <span onClick={show}
          className='absolute right-3 top-[38px] cursor-pointer'>

            {showPassword 
            ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) 
            : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}

          </span>

          {/* forget password */}
          <Link to="#">
            <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot Password</p>
          </Link>

        </label>
        
        {/* button for signing up */}
        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
          Sign In
        </button>
        
      </form>
    </div>
  );
}
export default LoginForm;
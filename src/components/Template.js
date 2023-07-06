import React from 'react'
import frameImage from "../assets/frame.png";
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import {FcGoogle} from "react-icons/fc"

export const Template = ({title, desc1, desc2, image, formType, setIsloggedIn}) => {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] h-full py-12 mx-auto gap-x-12 gap-y-0'>

        <div className='w-11/12 max-w-[450px] max-h-full' >
            <h1
             className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]' >
                {title}
            </h1>
            <p 
            className='text-[1.125rem] leading[1.625rem] mt-4'>
                <span className='text-richblack-100'>{desc1}</span>
                <br/>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>

            {formType === 'signup' ? (<SignUpForm setIsloggedIn={setIsloggedIn}/>) : (<LoginForm setIsloggedIn={setIsloggedIn}/>) }

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p  className='text-richblack-700 font-medium leading[1.375rem]'>
                    OR
                </p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>
            <div className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 '>
                <FcGoogle/>
                <p>Sign Up With Google</p>
            </div>
        </div>


        <div className='relative w-11/12 max-w-[450px] '>
            <img
            src = {frameImage}
            alt = "Pattern"
            width="558"
            height="504"
            loading='lazy'
            />

            <img
            src={image}
            alt = "Students"
            width='550'
            height='490'
            loading='lazy'
            className='absolute -top-4  right-4 '       //bottom-4 will same as -top-4
            />
        </div>
    </div>
  )
}
export default Template;
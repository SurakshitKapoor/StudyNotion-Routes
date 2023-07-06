import React, { useState } from 'react'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

 const SignUpForm = ({setIsloggedIn}) => {

    //variable for storing form data
    const[formData, setFormData] = useState({
        firstName:"", lastName:"", email:"", password:"", confirmPassword:""
    })

    //variable for toggle btn -> to change icon and (show/hide password) -> t/f
  const[showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //for student-instructor button and change of their properties
  const [accountType, setAccountType] = useState("student");

  //taking instance of useNavigate() func -> and calling it on required place with passing the desired page route
  const navigate = useNavigate();

    //func to handle any change on input field of form -> a general purpose function which works for all input fields
    //we can make a seperate func for each input also, w/o (e) -> but make the code lengthy
    function onChangeHandler(event){
        let {name, value} = event.target;
        setFormData((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    //a func to update the showPassword value -> with toggle of previous True / False
    function show(){
      setShowPassword(
        (prev) => (
            !prev
        )
      )
    }

    function showConfirm() {
      setShowConfirmPassword(
        (prev) => !prev
      )
    }

    //event handler / listner -> when we try to click on submit button
    function submitHandler(event){
      event.preventDefault();
      if(formData.password !== formData.confirmPassword)
      {
        // alert("Password not matched")
        toast.error("Password do not matched");
        return;
      }
      setIsloggedIn(true)
      toast.success("Account Created");

      const accountData = {
        ...formData
      }

      const finalData = {
        ...accountData,
        accountType
    }

    console.log("printing Final account data ");
    console.log(finalData);
    }
    
  return (
    <div>
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max max-h-full">
       
        <button
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>

        <button
            className={`${accountType === "instructor" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("instructor")}>
                Instructor
            </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* showing first and last name */}
        <div className="flex gap-x-4 mt-[20px]">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200"> * </sup>
            </p>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              placeholder="Enter First Name"
              onChange={onChangeHandler}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200"> * </sup>
            </p>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              placeholder="Enter Last Name"
              onChange={onChangeHandler}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
        </div>

        {/* showing email address */}
        <div className="mt-[20px]">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Email Address <sup className="text-pink-200"> * </sup>{" "}
            </p>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter Email Address"
              onChange={onChangeHandler}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
        </div>

        {/* create and confirm password */}
        <div className="w-full flex gap-x-4 mt-[20px]">
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password <sup className="text-pink-200"> * </sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              placeholder="Enter Password"
              onChange={onChangeHandler}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />

            {/* for icon */}
            <span
              onClick={show}
              className="absolute right-3 top-[38px] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          {/* confirm password */}
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              confirm Password <sup className="text-pink-200"> * </sup>
            </p>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              placeholder="Confirm Password"
              onChange={onChangeHandler}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />

            {/* for icon */}
            <span
              onClick={showConfirm}
              className="absolute right-3 top-[38px] cursor-pointer"
            >
              {showConfirm ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        {/* create account button */}
        <button className=" w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
}
export default SignUpForm;
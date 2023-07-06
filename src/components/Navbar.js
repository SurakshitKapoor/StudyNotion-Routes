import React from 'react'
import logo from "../assets/Logo.svg";
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast";


 const Navbar = (props) => {

    let isloggedIn = props.isloggedIn;
    let setIsloggedIn = props.setIsloggedIn;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={80} />
      </Link>

      <nav>
        <ul className="text-richblack-100 flex gap-x-6">
          <li className="flex gap-5">
            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Login, Signup, Logout, Dashboard */}
      <div className="flex items-center gap-x-4">
        {!isloggedIn && (
          <Link to="/login">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] 
            px-[12px] rounded-[8px] border border-richblack-700"
            >
              LogIn
            </button>
          </Link>
        )}

        {/* it's like -> if(isloggedIn == F) */}
        {!isloggedIn && (
          <Link to="/signup">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] 
            px-[12px] rounded-[8px] border border-richblack-700"
            >
              SignUp
            </button>
          </Link>
        )}

        {isloggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsloggedIn(false);
                toast.success("Logged Out");
              }}
              className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
            >
              LogOut
            </button>
          </Link>
        )}

        {isloggedIn && (
          <Link to="/dashboard">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] 
            px-[12px] rounded-[8px] border border-richblack-700"
            >
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
export default Navbar;
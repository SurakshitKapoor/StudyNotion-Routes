import "./App.css";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  const[isloggedIn, setIsloggedIn] = useState(false);
  return (
  //  h-screen -> earlier , where height is at max 100vh i.e. of full screen size only -> once you scroll you find no bg then
  <div className="w-screen h-full bg-richblack-900 flex flex-col">    
    
    <Navbar isloggedIn={isloggedIn} setIsloggedIn={setIsloggedIn}/>

    <Routes>
      
      <Route path = "/" element = {<Home/>}/>

      <Route path = "/login" element = {<Login setIsloggedIn={setIsloggedIn}/>}/>

      <Route path = "/signup" element = {<Signup setIsloggedIn={setIsloggedIn}/>}/>

      <Route path = "/dashboard" element = {
        <PrivateRoute isLoggedIn={isloggedIn}>
            <Dashboard/>
        </PrivateRoute> }/>

    </Routes>

  </div>);
}

export default App;
